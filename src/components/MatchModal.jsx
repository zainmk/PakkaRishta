import './MatchModal.css'

export default function MatchModal({ matchedProfile, currentUserPhoto, onClose, onMessage }) {
  return (
    <div className="match-modal-overlay" onClick={onClose}>
      <div className="match-modal" onClick={(e) => e.stopPropagation()}>
        <div className="match-modal__burst" />

        <div className="match-modal__header">
          <p className="match-modal__its">It&apos;s a</p>
          <h1 className="match-modal__title">Match!</h1>
          <p className="match-modal__subtitle">
            You and {matchedProfile.name} liked each other
          </p>
        </div>

        <div className="match-modal__photos">
          <div className="match-modal__photo-wrap match-modal__photo-wrap--left">
            <img
              src={currentUserPhoto}
              alt="You"
              className="match-modal__photo"
            />
            <div className="match-modal__photo-ring" />
          </div>
          <div className="match-modal__heart">♥</div>
          <div className="match-modal__photo-wrap match-modal__photo-wrap--right">
            <img
              src={matchedProfile.photoUrl}
              alt={matchedProfile.name}
              className="match-modal__photo"
            />
            <div className="match-modal__photo-ring" />
          </div>
        </div>

        <div className="match-modal__actions">
          <button className="match-modal__btn match-modal__btn--message" onClick={onMessage}>
            Send Message
          </button>
          <button className="match-modal__btn match-modal__btn--keep" onClick={onClose}>
            Keep Swiping
          </button>
        </div>
      </div>
    </div>
  )
}
