'use client'

import { useState } from 'react'
import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { lineChartMonthly, lineChartYearly } from '@/lib/dummyData'
import styles from './LineChartBlock.module.css'

type View = 'manad' | 'ar'

const COLORS = {
  deltagare: '#6929ff',
  visningar: '#00c853',
  perVisning: '#f59300',
}

function formatLeft(v: number) {
  if (v >= 1_000_000) return `${(v / 1_000_000).toFixed(1)}M`
  if (v >= 1_000) return `${(v / 1_000).toFixed(0)}k`
  return String(v)
}

function formatRight(v: number) {
  return v.toFixed(2)
}

export default function LineChartBlock() {
  const [view, setView] = useState<View>('manad')

  const data = view === 'manad' ? lineChartMonthly : lineChartYearly

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>Trender över tid</h2>
          <p className={styles.subtitle}>Växla mellan månads– &amp; årsvy.</p>
        </div>
        <div className={styles.toggle}>
          <button
            className={view === 'manad' ? styles.toggleActive : styles.toggleInactive}
            onClick={() => setView('manad')}
          >
            Månad
          </button>
          <button
            className={view === 'ar' ? styles.toggleActive : styles.toggleInactive}
            onClick={() => setView('ar')}
          >
            År
          </button>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={380}>
        <ComposedChart data={data} margin={{ top: 10, right: 60, left: 10, bottom: 10 }}>
          <CartesianGrid strokeDasharray="4 4" stroke="#e5e7eb" vertical={true} horizontal={false} />
          <XAxis
            dataKey="label"
            tick={{ fontSize: 12, fill: '#6b7280' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            yAxisId="left"
            orientation="left"
            tickFormatter={formatLeft}
            tick={{ fontSize: 12, fill: '#6929ff' }}
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
            tickFormatter={formatRight}
            tick={{ fontSize: 12, fill: '#f59300' }}
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
              fontSize: 13,
            }}
            formatter={(value, name) => {
              const n = Number(value)
              if (name === 'perVisning') return [n.toFixed(2), 'Deltagare per visning']
              if (name === 'deltagare') return [n.toLocaleString('sv-SE'), 'Deltagare']
              if (name === 'visningar') return [n.toLocaleString('sv-SE'), 'Visningar']
              return [String(value), String(name)]
            }}
          />
          <Legend
            iconType="circle"
            iconSize={10}
            wrapperStyle={{ fontSize: 13, paddingTop: 16 }}
            formatter={(value) => {
              if (value === 'deltagare') return 'Deltagare'
              if (value === 'visningar') return 'Visningar'
              if (value === 'perVisning') return 'Deltagare per visning'
              return value
            }}
          />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="deltagare"
            stroke={COLORS.deltagare}
            strokeWidth={2}
            dot={{ r: 4, fill: COLORS.deltagare, strokeWidth: 0 }}
            activeDot={{ r: 6 }}
          />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="visningar"
            stroke={COLORS.visningar}
            strokeWidth={2}
            dot={{ r: 4, fill: COLORS.visningar, strokeWidth: 0 }}
            activeDot={{ r: 6 }}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="perVisning"
            stroke={COLORS.perVisning}
            strokeWidth={2}
            dot={{ r: 4, fill: COLORS.perVisning, strokeWidth: 0 }}
            activeDot={{ r: 6 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}
