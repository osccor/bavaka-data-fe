'use client'

import { useState } from 'react'
import styles from './SearchFilters.module.css'

const HOUSING_TYPES = [
  'Alla bostadstyper',
  'Villa',
  'Lägenhet',
  'Radhus',
  'Fritidshus',
]

interface SearchFiltersProps {
  onSearch?: (query: string) => void
  onTypeChange?: (type: string) => void
}

export default function SearchFilters({
  onSearch,
  onTypeChange,
}: SearchFiltersProps) {
  const [query, setQuery] = useState('')
  const [housingType, setHousingType] = useState(HOUSING_TYPES[0])

  return (
    <div className={styles.wrapper}>
      <div className={styles.searchField}>
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
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Sök på område eller kommun"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            onSearch?.(e.target.value)
          }}
          aria-label="Sök på område eller kommun"
        />
        <span className={styles.searchIcon} aria-hidden>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </span>
      </div>

      <div className={styles.selectField}>
        <select
          className={styles.select}
          value={housingType}
          onChange={(e) => {
            setHousingType(e.target.value)
            onTypeChange?.(e.target.value)
          }}
          aria-label="Välj bostadstyp"
        >
          {HOUSING_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
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
