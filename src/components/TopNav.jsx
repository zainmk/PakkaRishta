import './TopNav.css'

export default function TopNav() {
  return (
    <header className="top-nav">
      <div className="top-nav__logo">
        <span className="top-nav__logo-icon">♡</span>
        <span className="top-nav__logo-text">PakkaRishta</span>
      </div>
      <div className="top-nav__actions">
        <button className="top-nav__btn" aria-label="Filter">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" y1="6" x2="20" y2="6"/>
            <line x1="8" y1="12" x2="16" y2="12"/>
            <line x1="11" y1="18" x2="13" y2="18"/>
          </svg>
        </button>
        <button className="top-nav__btn" aria-label="Notifications">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
          <span className="top-nav__badge" />
        </button>
      </div>
    </header>
  )
}
