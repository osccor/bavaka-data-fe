import KPICard from './KPICard'
import { kpiData } from '@/lib/dummyData'
import styles from './KPISection.module.css'

export default function KPISection() {
  return (
    <div className={styles.grid}>
      {kpiData.map((kpi) => (
        <KPICard key={kpi.id} {...kpi} />
      ))}
    </div>
  )
}
