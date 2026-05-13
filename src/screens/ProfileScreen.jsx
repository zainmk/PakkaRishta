import './ProfileScreen.css'

export default function ProfileScreen({ profile, onClose }) {
  if (!profile) return null

  return (
    <div className="profile-screen">
      <div className="profile-screen__header">
        <button className="profile-screen__back" onClick={onClose} aria-label="Go back">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>
        <h2 className="profile-screen__title">Profile</h2>
        <div style={{ width: 40 }} />
      </div>

      <div className="profile-screen__body">
        <div className="profile-screen__avatar-wrap">
          <img src={profile.photoUrl} alt={profile.name} className="profile-screen__avatar" />
        </div>

        <h1 className="profile-screen__name">{profile.name}, {profile.age}</h1>

        <div className="profile-screen__fields">
          <div className="profile-screen__field">
            <span className="profile-screen__field-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </span>
            <div>
              <p className="profile-screen__field-label">Date of Birth</p>
              <p className="profile-screen__field-value">{profile.dob}</p>
            </div>
          </div>

          <div className="profile-screen__field">
            <span className="profile-screen__field-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
              </svg>
            </span>
            <div>
              <p className="profile-screen__field-label">Occupation</p>
              <p className="profile-screen__field-value">{profile.occupation}</p>
            </div>
          </div>

          <div className="profile-screen__field">
            <span className="profile-screen__field-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </span>
            <div>
              <p className="profile-screen__field-label">Location</p>
              <p className="profile-screen__field-value">{profile.location}</p>
            </div>
          </div>

          <div className="profile-screen__field">
            <span className="profile-screen__field-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="2" x2="12" y2="22"/><path d="M12 2l-3 4m3-4l3 4"/><path d="M12 22l-3-4m3 4l3-4"/><line x1="8" y1="12" x2="16" y2="12"/>
              </svg>
            </span>
            <div>
              <p className="profile-screen__field-label">Height</p>
              <p className="profile-screen__field-value">{profile.height}</p>
            </div>
          </div>

          <div className="profile-screen__field">
            <span className="profile-screen__field-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </span>
            <div>
              <p className="profile-screen__field-label">Distance</p>
              <p className="profile-screen__field-value">{profile.distance}</p>
            </div>
          </div>

          {profile.citizenship && (
            <div className="profile-screen__field">
              <span className="profile-screen__field-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>
                </svg>
              </span>
              <div>
                <p className="profile-screen__field-label">Citizenship</p>
                <p className="profile-screen__field-value">{profile.citizenship}</p>
              </div>
            </div>
          )}

          {profile.ethnicity && (
            <div className="profile-screen__field">
              <span className="profile-screen__field-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </span>
              <div>
                <p className="profile-screen__field-label">Ethnicity</p>
                <p className="profile-screen__field-value">{profile.ethnicity}</p>
              </div>
            </div>
          )}

          {profile.maritalStatus && (
            <div className="profile-screen__field">
              <span className="profile-screen__field-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </span>
              <div>
                <p className="profile-screen__field-label">Marital Status</p>
                <p className="profile-screen__field-value">{profile.maritalStatus}</p>
              </div>
            </div>
          )}

          {profile.education && (
            <div className="profile-screen__field">
              <span className="profile-screen__field-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </span>
              <div>
                <p className="profile-screen__field-label">Education</p>
                <p className="profile-screen__field-value">{profile.education}</p>
              </div>
            </div>
          )}
        </div>

        <div className="profile-screen__bio-section">
          <p className="profile-screen__bio-label">About</p>
          <p className="profile-screen__bio">{profile.bio}</p>
        </div>

        <div className="profile-screen__interests">
          {profile.interests.map((tag) => (
            <span key={tag} className="profile-screen__tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
