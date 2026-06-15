import styles from './KPICard.module.css'

interface KPICardProps {
  label: string
  monthlyValue: number
  trendPercent: number
  trendPositive: boolean
  yearTotal: number
}

function formatNumber(n: number): string {
  return n.toLocaleString('sv-SE')
}

export default function KPICard({
  label,
  monthlyValue,
  trendPercent,
  trendPositive,
  yearTotal,
}: KPICardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div className={styles.header}>
          <span className={styles.label}>{label}</span>
          <span className={trendPositive ? styles.trendUp : styles.trendDown}>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" style={{ flexShrink: 0 }}>
              {trendPositive
                ? <path d="M5 1L9.33 8.5H0.67L5 1Z" />
                : <path d="M5 9L9.33 1.5H0.67L5 9Z" />}
            </svg>
            {' '}{trendPercent}%{' '}
            {trendPositive ? 'fler' : 'färre'} vs. förra månaden
          </span>
        </div>

        <div className={styles.valueRow}>
          <span className={styles.value}>{formatNumber(monthlyValue)}</span>
          <span className={styles.unit}>/mån</span>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.divider} />
        <div className={styles.footer}>
          <span className={styles.footerLabel}>Totalt i år</span>
          <span className={styles.footerValue}>{formatNumber(yearTotal)}</span>
        </div>
      </div>
    </div>
  )
}
