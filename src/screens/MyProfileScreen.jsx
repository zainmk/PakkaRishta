import { useState } from 'react'
import './MyProfileScreen.css'

export default function MyProfileScreen({ form, onChange }) {
  const [saved, setSaved] = useState(false)

  const set = (field) => (e) => {
    onChange((prev) => ({ ...prev, [field]: e.target.value }))
    setSaved(false)
  }

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const initial = form.firstName ? form.firstName[0].toUpperCase() : '?'

  return (
    <div className="my-profile">
      <div className="my-profile__hero">
        <div className="my-profile__avatar">
          <span className="my-profile__initial">{initial}</span>
        </div>
        {form.firstName && (
          <p className="my-profile__preview-name">
            {form.firstName[0].toUpperCase()}. {form.lastName}
            {form.dob && <span className="my-profile__preview-age"> · {form.height}</span>}
          </p>
        )}
      </div>

      <div className="my-profile__form">
        <div className="my-profile__section-label">Basic Info</div>

        <div className="my-profile__row">
          <div className="my-profile__field">
            <label className="my-profile__label">First Name</label>
            <input
              className="my-profile__input"
              type="text"
              placeholder="Aisha"
              value={form.firstName}
              onChange={set('firstName')}
            />
          </div>
          <div className="my-profile__field">
            <label className="my-profile__label">Last Name</label>
            <input
              className="my-profile__input"
              type="text"
              placeholder="Khan"
              value={form.lastName}
              onChange={set('lastName')}
            />
          </div>
        </div>

        <div className="my-profile__row">
          <div className="my-profile__field">
            <label className="my-profile__label">Date of Birth</label>
            <input
              className="my-profile__input"
              type="date"
              value={form.dob}
              onChange={set('dob')}
            />
          </div>
          <div className="my-profile__field">
            <label className="my-profile__label">Height</label>
            <input
              className="my-profile__input"
              type="text"
              placeholder={`5'5"`}
              value={form.height}
              onChange={set('height')}
            />
          </div>
        </div>

        <div className="my-profile__field">
          <label className="my-profile__label">Occupation</label>
          <input
            className="my-profile__input"
            type="text"
            placeholder="e.g. Software Engineer"
            value={form.occupation}
            onChange={set('occupation')}
          />
        </div>

        <div className="my-profile__field">
          <label className="my-profile__label">Location</label>
          <input
            className="my-profile__input"
            type="text"
            placeholder="e.g. Lahore, Pakistan"
            value={form.location}
            onChange={set('location')}
          />
        </div>

        <div className="my-profile__row">
          <div className="my-profile__field">
            <label className="my-profile__label">Citizenship</label>
            <input
              className="my-profile__input"
              type="text"
              placeholder="e.g. Pakistani"
              value={form.citizenship || ''}
              onChange={set('citizenship')}
            />
          </div>
          <div className="my-profile__field">
            <label className="my-profile__label">Ethnicity</label>
            <input
              className="my-profile__input"
              type="text"
              placeholder="e.g. Punjabi"
              value={form.ethnicity || ''}
              onChange={set('ethnicity')}
            />
          </div>
        </div>

        <div className="my-profile__row">
          <div className="my-profile__field">
            <label className="my-profile__label">Marital Status</label>
            <select
              className="my-profile__input"
              value={form.maritalStatus || ''}
              onChange={set('maritalStatus')}
            >
              <option value="">Select...</option>
              <option value="Never Married">Never Married</option>
              <option value="Divorced">Divorced</option>
              <option value="Widowed">Widowed</option>
            </select>
          </div>
          <div className="my-profile__field">
            <label className="my-profile__label">Education</label>
            <input
              className="my-profile__input"
              type="text"
              placeholder="e.g. Bachelor's in CS"
              value={form.education || ''}
              onChange={set('education')}
            />
          </div>
        </div>

        <div className="my-profile__section-label">About You</div>

        <div className="my-profile__field">
          <label className="my-profile__label">Bio</label>
          <textarea
            className="my-profile__input my-profile__textarea"
            placeholder="Tell people a bit about yourself..."
            value={form.bio}
            onChange={set('bio')}
            rows={3}
          />
        </div>

        <div className="my-profile__field">
          <label className="my-profile__label">Interests</label>
          <input
            className="my-profile__input"
            type="text"
            placeholder="e.g. Travel, Cooking, Reading"
            value={form.interests}
            onChange={set('interests')}
          />
          <p className="my-profile__hint">Separate with commas</p>
        </div>

        {form.interests && (
          <div className="my-profile__tags">
            {form.interests.split(',').map(t => t.trim()).filter(Boolean).map((tag) => (
              <span key={tag} className="my-profile__tag">{tag}</span>
            ))}
          </div>
        )}

        <button
          className={`my-profile__save ${saved ? 'my-profile__save--saved' : ''}`}
          onClick={handleSave}
        >
          {saved ? 'Saved ✓' : 'Save Profile'}
        </button>
      </div>
    </div>
  )
}
