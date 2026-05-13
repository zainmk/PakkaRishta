import './MessagesScreen.css'

export default function MessagesScreen({ matches = [] }) {
  if (matches.length === 0) {
    return (
      <div className="messages-screen messages-screen--empty">
        <span className="messages-screen__empty-icon">💬</span>
        <p className="messages-screen__empty-title">No messages yet</p>
        <p className="messages-screen__empty-sub">Match with someone to start a conversation</p>
      </div>
    )
  }

  return (
    <div className="messages-screen">
      <div className="messages-screen__new">
        <h3 className="messages-screen__section-title">New Matches</h3>
        <div className="messages-screen__avatars">
          {matches.map((m) => (
            <div key={m.id} className="messages-screen__new-item">
              <div className="messages-screen__avatar-wrap">
                <div className="messages-screen__avatar">
                  {m.name[0].toUpperCase()}
                </div>
                <span className="messages-screen__online-dot" />
              </div>
              <p className="messages-screen__name">{m.name[0]}. {m.lastName}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="messages-screen__list">
        <h3 className="messages-screen__section-title">Messages</h3>
        {matches.map((m) => (
          <div key={m.id} className="messages-screen__msg-row">
            <div className="messages-screen__msg-avatar">
              {m.name[0].toUpperCase()}
            </div>
            <div className="messages-screen__msg-content">
              <div className="messages-screen__msg-header">
                <span className="messages-screen__msg-name">{m.name[0]}. {m.lastName}</span>
                <span className="messages-screen__msg-time">Just now</span>
              </div>
              <p className="messages-screen__msg-preview">Say hi! 👋</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
