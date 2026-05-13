import './ProfileCard.css'

export default function ProfileCard({ profile, isTop, onInfoClick }) {
  const fields = [
    { label: 'Age',            value: `${profile.age}` },
    { label: 'Height',         value: profile.height },
    { label: 'Occupation',     value: profile.occupation },
    { label: 'Location',       value: profile.location.split(',')[0] },
    { label: 'Citizenship',    value: profile.citizenship },
    { label: 'Ethnicity',      value: profile.ethnicity },
    { label: 'Marital Status', value: profile.maritalStatus },
    { label: 'Education',      value: profile.education },
  ].filter(f => f.value)

  return (
    <div className={`profile-card ${isTop ? 'profile-card--top' : ''}`}>
      <button
        className="profile-card__info-btn"
        aria-label="More info"
        onClick={(e) => { e.stopPropagation(); onInfoClick?.(profile) }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
      </button>

      <div className="profile-card__content">
        <h1 className="profile-card__initials">
          {profile.name[0].toUpperCase()}{profile.lastName[0].toUpperCase()}
        </h1>

        <div className="profile-card__fields">
          {fields.map(({ label, value }) => (
            <div key={label} className="profile-card__field">
              <span className="profile-card__field-label">{label}</span>
              <span className="profile-card__field-sep"> : </span>
              <span className="profile-card__field-value">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
