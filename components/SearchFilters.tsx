'use client'

import { useState } from 'react'
import styles from './SearchFilters.module.css'

const PERIODS = ['2026', '2025', '2024', '2023']

interface SearchFiltersProps {
  onSearch?: (query: string) => void
  onPeriodChange?: (period: string) => void
}

export default function SearchFilters({
  onSearch,
  onPeriodChange,
}: SearchFiltersProps) {
  const [query, setQuery] = useState('')
  const [period, setPeriod] = useState(PERIODS[0])

  return (
    <div className={styles.wrapper}>
      <div className={styles.searchField}>
        <span className={styles.searchIcon} aria-hidden>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </span>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Sök mäklare eller område"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            onSearch?.(e.target.value)
          }}
          aria-label="Sök mäklare eller område"
        />
        {query && (
          <button
            className={styles.clearButton}
            onClick={() => { setQuery(''); onSearch?.('') }}
            aria-label="Rensa sökning"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
      </div>

      <div className={styles.selectField}>
        <span className={styles.selectIcon} aria-hidden>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        </span>
        <select
          className={styles.select}
          value={period}
          onChange={(e) => {
            setPeriod(e.target.value)
            onPeriodChange?.(e.target.value)
          }}
          aria-label="Välj tidsperiod"
        >
          {PERIODS.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
        <span className={styles.chevron} aria-hidden>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </div>
    </div>
  )
}
