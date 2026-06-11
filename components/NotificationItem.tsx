import styles from './NotificationItem.module.css'

interface NotificationItemProps {
  isNew: boolean
  criteria: string
  location: string
  agency: string
  minutesAgo: number
}

export default function NotificationItem({
  isNew,
  criteria,
  location,
  agency,
  minutesAgo,
}: NotificationItemProps) {
  return (
    <div className={styles.item}>
      <div className={styles.left}>
        {isNew && <span className={styles.newBadge}>NY!</span>}
        <div className={styles.textBlock}>
          <p className={styles.criteria}>{criteria}</p>
          <p className={styles.location}>{location}</p>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.agencyBlock}>
          <div className={styles.agencyLogo} aria-label={agency}>
            <span className={styles.agencyInitials}>
              {agency
                .split(' ')
                .slice(0, 2)
                .map((w) => w[0])
                .join('')}
            </span>
          </div>
          <div className={styles.agencyInfo}>
            <span className={styles.agencyLabel}>Varit på visning hos</span>
            <span className={styles.agencyName}>{agency}</span>
          </div>
        </div>
        <span className={styles.time}>{minutesAgo} min</span>
      </div>
    </div>
  )
}
