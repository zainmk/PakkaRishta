import './MatchesScreen.css'

export default function MatchesScreen({ matches, onViewProfile }) {
  if (matches.length === 0) {
    return (
      <div className="matches-screen matches-screen--empty">
        <span className="matches-screen__empty-icon">♡</span>
        <p className="matches-screen__empty-title">No matches yet</p>
        <p className="matches-screen__empty-sub">Keep swiping to find your match</p>
      </div>
    )
  }

  return (
    <div className="matches-screen">
      <p className="matches-screen__count">{matches.length} {matches.length === 1 ? 'match' : 'matches'}</p>
      <div className="matches-screen__grid">
        {matches.map((profile) => (
          <div
            key={profile.id}
            className="matches-screen__card"
            onClick={() => onViewProfile?.(profile)}
          >
            <div className="matches-screen__card-avatar">
              <span className="matches-screen__card-initial">
                {profile.name[0].toUpperCase()}
              </span>
            </div>
            <div className="matches-screen__card-info">
              <p className="matches-screen__card-name">
                {profile.name[0]}. {profile.lastName}
              </p>
              <p className="matches-screen__card-age">{profile.age}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
