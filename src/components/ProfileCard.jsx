import './ProfileCard.css'

export default function ProfileCard({ profile, isTop }) {
  return (
    <div className={`profile-card ${isTop ? 'profile-card--top' : ''}`}>
      <img
        className="profile-card__photo"
        src={profile.photoUrl}
        alt={profile.name}
        draggable={false}
      />
      <div className="profile-card__gradient" />
      <div className="profile-card__info">
        <div className="profile-card__header">
          <h2 className="profile-card__name">
            {profile.name}
            <span className="profile-card__age">{profile.age}</span>
          </h2>
          <button className="profile-card__info-btn" aria-label="More info">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
          </button>
        </div>
        <p className="profile-card__distance">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          {profile.distance}
        </p>
        <div className="profile-card__interests">
          {profile.interests.slice(0, 3).map((tag) => (
            <span key={tag} className="profile-card__tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
