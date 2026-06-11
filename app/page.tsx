import PageHeader from '@/components/PageHeader'
import LiveTicker from '@/components/LiveTicker'
import SearchFilters from '@/components/SearchFilters'
import KPISection from '@/components/KPISection'
import LineChartBlock from '@/components/LineChartBlock'
import BarChartBlock from '@/components/BarChartBlock'
import { breadcrumb } from '@/lib/dummyData'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <PageHeader
          title="Visningsstatistik i Sverige"
          description="Se hur många som går på visningar i Sverige just nu."
          breadcrumb={breadcrumb}
        />
        <LiveTicker />
        <SearchFilters />
        <KPISection />
        <LineChartBlock />
        <BarChartBlock />
      </div>
    </main>
  )
}
