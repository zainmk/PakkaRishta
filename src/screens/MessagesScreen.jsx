import './MessagesScreen.css'

const DEMO_MATCHES = [
  { id: 1, name: 'Aisha', photoUrl: '/avatar-placeholder.svg' },
  { id: 2, name: 'Zara', photoUrl: '/avatar-placeholder.svg' },
  { id: 4, name: 'Sana', photoUrl: '/avatar-placeholder.svg' },
]

export default function MessagesScreen() {
  return (
    <div className="messages-screen">
      <div className="messages-screen__section">
        <h3 className="messages-screen__section-title">New Matches</h3>
        <div className="messages-screen__new">
          {DEMO_MATCHES.map((m) => (
            <div key={m.id} className="messages-screen__new-item">
              <div className="messages-screen__avatar-wrap">
                <img src={m.photoUrl} alt={m.name} className="messages-screen__avatar" />
                <span className="messages-screen__online-dot" />
              </div>
              <p className="messages-screen__name">{m.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="messages-screen__section">
        <h3 className="messages-screen__section-title">Messages</h3>
        <div className="messages-screen__messages">
          {DEMO_MATCHES.map((m) => (
            <div key={m.id} className="messages-screen__msg-row">
              <img src={m.photoUrl} alt={m.name} className="messages-screen__msg-avatar" />
              <div className="messages-screen__msg-content">
                <div className="messages-screen__msg-header">
                  <span className="messages-screen__msg-name">{m.name}</span>
                  <span className="messages-screen__msg-time">Just now</span>
                </div>
                <p className="messages-screen__msg-preview">Say hi! 👋</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="messages-screen__hint">Swipe right to get more matches!</p>
    </div>
  )
}
