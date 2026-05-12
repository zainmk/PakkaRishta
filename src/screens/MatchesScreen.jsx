import './MatchesScreen.css'

const DEMO_MATCHES = [
  { id: 1, name: 'Aisha', photoUrl: '/avatar-placeholder.svg' },
  { id: 2, name: 'Zara', photoUrl: '/avatar-placeholder.svg' },
  { id: 4, name: 'Sana', photoUrl: '/avatar-placeholder.svg' },
]

export default function MatchesScreen() {
  return (
    <div className="matches-screen">
      <div className="matches-screen__section">
        <h3 className="matches-screen__section-title">New Matches</h3>
        <div className="matches-screen__new">
          {DEMO_MATCHES.map((m) => (
            <div key={m.id} className="matches-screen__new-item">
              <div className="matches-screen__avatar-wrap">
                <img src={m.photoUrl} alt={m.name} className="matches-screen__avatar" />
                <span className="matches-screen__online-dot" />
              </div>
              <p className="matches-screen__name">{m.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="matches-screen__section">
        <h3 className="matches-screen__section-title">Messages</h3>
        <div className="matches-screen__messages">
          {DEMO_MATCHES.map((m) => (
            <div key={m.id} className="matches-screen__msg-row">
              <img src={m.photoUrl} alt={m.name} className="matches-screen__msg-avatar" />
              <div className="matches-screen__msg-content">
                <div className="matches-screen__msg-header">
                  <span className="matches-screen__msg-name">{m.name}</span>
                  <span className="matches-screen__msg-time">Just now</span>
                </div>
                <p className="matches-screen__msg-preview">Say hi! 👋</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="matches-screen__hint">Swipe right to get more matches!</p>
    </div>
  )
}
