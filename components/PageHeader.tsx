import styles from './PageHeader.module.css'

interface BreadcrumbItem {
  label: string
  href: string
}

interface PageHeaderProps {
  title: string
  description: string
  breadcrumb: BreadcrumbItem[]
}

export default function PageHeader({ title, description, breadcrumb }: PageHeaderProps) {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        {breadcrumb.map((item, i) => (
          <span key={item.href} className={styles.breadcrumbItem}>
            {i > 0 && <span className={styles.separator}>›</span>}
            {i < breadcrumb.length - 1 ? (
              <a href={item.href} className={styles.breadcrumbLink}>
                {item.label}
              </a>
            ) : (
              <span className={styles.breadcrumbCurrent}>{item.label}</span>
            )}
          </span>
        ))}
      </nav>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
    </div>
  )
}
