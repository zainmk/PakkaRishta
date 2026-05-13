import { useState } from 'react'
import { families } from '../data/families'
import './ShareModal.css'

export default function ShareModal({ profile, onClose }) {
  const [selected, setSelected] = useState(null)

  return (
    <div className="share-modal-overlay" onClick={onClose}>
      <div className="share-modal" onClick={(e) => e.stopPropagation()}>
        <div className="share-modal__handle" />

        <div className="share-modal__header">
          <h2 className="share-modal__title">Share Profile</h2>
          <p className="share-modal__subtitle">
            Send {profile.name[0]}. {profile.lastName}&apos;s profile to a family
          </p>
        </div>

        <div className="share-modal__list">
          {families.map((family) => (
            <button
              key={family.id}
              className={`share-modal__family ${selected === family.id ? 'share-modal__family--selected' : ''}`}
              onClick={() => setSelected(family.id)}
            >
              <div className="share-modal__family-avatar">
                {family.name.split(' ')[1][0]}
              </div>
              <div className="share-modal__family-info">
                <p className="share-modal__family-name">{family.name}</p>
                <p className="share-modal__family-members">{family.memberCount} members</p>
              </div>
              {selected === family.id && (
                <span className="share-modal__check">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="share-modal__footer">
          <button
            className={`share-modal__send ${selected ? 'share-modal__send--active' : ''}`}
            disabled={!selected}
            onClick={onClose}
          >
            {selected ? `Send to ${families.find(f => f.id === selected)?.name}` : 'Select a family'}
          </button>
        </div>
      </div>
    </div>
  )
}
