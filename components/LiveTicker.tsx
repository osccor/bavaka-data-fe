'use client'

import { useEffect, useRef, useState } from 'react'
import NotificationItem from './NotificationItem'
import { liveTickerPool } from '@/lib/dummyData'
import styles from './LiveTicker.module.css'

const VISIBLE_COUNT = 2
const INTERVAL_MS = 3500

function pickNext(
  pool: typeof liveTickerPool,
  current: typeof liveTickerPool,
): (typeof liveTickerPool)[0] {
  const currentIds = new Set(current.map((i) => i.id))
  const candidates = pool.filter((i) => !currentIds.has(i.id))
  return candidates[Math.floor(Math.random() * candidates.length)]
}

export default function LiveTicker() {
  const [items, setItems] = useState(() =>
    liveTickerPool.slice(0, VISIBLE_COUNT),
  )
  // Track which id was most recently added so we can animate it
  const [newestId, setNewestId] = useState<string>(liveTickerPool[0].id)
  const poolRef = useRef(liveTickerPool)

  useEffect(() => {
    const timer = setInterval(() => {
      setItems((prev) => {
        const next = pickNext(poolRef.current, prev)
        if (!next) return prev
        setNewestId(next.id)
        return [next, ...prev.slice(0, VISIBLE_COUNT - 1)]
      })
    }, INTERVAL_MS)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.tickerCard}>
        <div className={styles.tickerHeader}>
          <div>
            <h2 className={styles.tickerTitle}>LiveTicker</h2>
            <p className={styles.tickerSubtitle}>
              Personer som går på visningar i Sverige just nu.
            </p>
          </div>
          <div className={styles.livePill}>
            <span className={styles.liveDot} />
            <span>LIVE</span>
          </div>
        </div>
        <div className={styles.notificationList}>
          {items.map((item) => (
            <div
              key={item.id}
              className={
                item.id === newestId
                  ? styles.itemWrapperNew
                  : styles.itemWrapper
              }
            >
              <NotificationItem
                isNew={item.id === newestId}
                criteria={item.criteria}
                location={item.location}
                agency={item.agency}
                minutesAgo={item.minutesAgo}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.ctaCard}>
        <h2 className={styles.ctaTitle}>Vi matchar dig med rätt köpare</h2>
        <p className={styles.ctaText}>
          På Boneo väntar vi inte på att dina köpare ska hitta din annons – vi
          letar aktivt upp dem åt dig istället.
        </p>
        <button className={styles.ctaButton}>Läs mer om annonsering</button>
      </div>
    </div>
  )
}
