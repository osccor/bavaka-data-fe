'use client'

import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { barChartData } from '@/lib/dummyData'
import styles from './BarChartBlock.module.css'

const COLORS = {
  deltagare: '#6929ff',
  visningar: '#00c853',
  perVisning100: '#f59300',
}

function formatY(v: number) {
  if (v >= 1_000_000) return `${(v / 1_000_000).toFixed(1)}M`
  if (v >= 1_000) return `${(v / 1_000).toFixed(0)}k`
  return String(v)
}

const BAR_WIDTH = 52 // px per group — drives scroll container width
const CHART_MIN_WIDTH = barChartData.length * BAR_WIDTH + 120

export default function BarChartBlock() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.title}>Jämförelse per län/kommun/område</h2>
        <p className={styles.subtitle}>
          Antal deltagare och visningar per region.
        </p>
      </div>

      <div className={styles.scrollWrapper}>
        <div style={{ minWidth: CHART_MIN_WIDTH }}>
          <ResponsiveContainer width="100%" height={420}>
            <ComposedChart
              data={barChartData}
              margin={{ top: 10, right: 60, left: 10, bottom: 80 }}
              barCategoryGap="30%"
              barGap={2}
            >
              <CartesianGrid
                strokeDasharray="4 4"
                stroke="#e5e7eb"
                vertical={false}
              />
              <XAxis
                dataKey="lan"
                tick={{ fontSize: 11, fill: '#6b7280' }}
                axisLine={false}
                tickLine={false}
                angle={-45}
                textAnchor="end"
                interval={0}
              />
              <YAxis
                yAxisId="left"
                orientation="left"
                tickFormatter={formatY}
                tick={{ fontSize: 11, fill: '#6929ff' }}
                axisLine={false}
                tickLine={false}
                label={{
                  value: 'Deltagare',
                  angle: -90,
                  position: 'insideLeft',
                  offset: 10,
                  style: { fontSize: 11, fill: '#6929ff' },
                }}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                tickFormatter={formatY}
                tick={{ fontSize: 11, fill: '#f59300' }}
                axisLine={false}
                tickLine={false}
                label={{
                  value: 'Deltagare per visning',
                  angle: 90,
                  position: 'insideRight',
                  offset: 10,
                  style: { fontSize: 11, fill: '#f59300' },
                }}
              />
              <Tooltip
                contentStyle={{
                  borderRadius: 8,
                  border: '1px solid #e5e7eb',
                  fontSize: 12,
                }}
                formatter={(value, name) => {
                  const n = Number(value)
                  if (name === 'perVisning100')
                    return [(n / 100).toFixed(2), 'Deltagare per visning']
                  if (name === 'deltagare')
                    return [n.toLocaleString('sv-SE'), 'Deltagare']
                  if (name === 'visningar')
                    return [n.toLocaleString('sv-SE'), 'Visningar']
                  return [String(value), String(name)]
                }}
              />
              <Legend
                iconType="circle"
                iconSize={10}
                wrapperStyle={{ fontSize: 13, paddingTop: 8 }}
                formatter={(value) => {
                  if (value === 'deltagare') return 'Deltagare'
                  if (value === 'visningar') return 'Visningar'
                  if (value === 'perVisning100') return 'Deltagare per visning (x100)'
                  return value
                }}
              />
              <Bar
                yAxisId="left"
                dataKey="deltagare"
                fill={COLORS.deltagare}
                radius={[3, 3, 0, 0]}
              />
              <Bar
                yAxisId="left"
                dataKey="visningar"
                fill={COLORS.visningar}
                radius={[3, 3, 0, 0]}
              />
              <Bar
                yAxisId="right"
                dataKey="perVisning100"
                fill={COLORS.perVisning100}
                radius={[3, 3, 0, 0]}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
