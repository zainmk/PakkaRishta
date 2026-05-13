import { useState, useRef, useCallback } from 'react'
import TinderCard from 'react-tinder-card'
import ProfileCard from './ProfileCard'
import ActionButtons from './ActionButtons'
import MatchModal from './MatchModal'
import './CardStack.css'

const MY_PHOTO = '/avatar-placeholder.svg'

export default function CardStack({ profiles, onMatch, onViewProfile }) {
  const [currentIndex, setCurrentIndex] = useState(profiles.length - 1)
  const [matchedProfile, setMatchedProfile] = useState(null)
  const cardRefs = useRef([])

  const canSwipe = currentIndex >= 0

  const handleSwipe = useCallback(
    (direction, profile, index) => {
      setCurrentIndex(index - 1)
      if (direction === 'right' && Math.random() < 0.4) {
        setMatchedProfile(profile)
        onMatch?.(profile)
      }
    },
    [onMatch]
  )

  const swipe = useCallback(
    async (dir) => {
      if (!canSwipe) return
      const ref = cardRefs.current[currentIndex]
      if (ref) await ref.swipe(dir)
    },
    [canSwipe, currentIndex]
  )

  return (
    <div className="card-stack-container">
      <div className="card-stack">
        {profiles.map((profile, index) => {
          const pointerStart = { x: 0, y: 0 }
          const TAP_THRESHOLD = 8

          return (
          <TinderCard
            ref={(el) => (cardRefs.current[index] = el)}
            key={profile.id}
            onSwipe={(dir) => handleSwipe(dir, profile, index)}
            preventSwipe={['up', 'down']}
            swipeRequirementType="position"
            swipeThreshold={80}
          >
            <div
              className="card-stack__card"
              onPointerDown={(e) => { pointerStart.x = e.clientX; pointerStart.y = e.clientY }}
              onClick={(e) => {
                const dx = Math.abs(e.clientX - pointerStart.x)
                const dy = Math.abs(e.clientY - pointerStart.y)
                if (dx < TAP_THRESHOLD && dy < TAP_THRESHOLD) onViewProfile?.(profile)
              }}
            >
              <ProfileCard profile={profile} isTop={index === currentIndex} onInfoClick={onViewProfile} />
              {index === currentIndex && (
                <>
                  <div className="card-stack__stamp card-stack__stamp--like">LIKE</div>
                  <div className="card-stack__stamp card-stack__stamp--nope">NOPE</div>
                </>
              )}
            </div>
          </TinderCard>
          )
        })}

        {currentIndex < 0 && (
          <div className="card-stack__empty">
            <span className="card-stack__empty-icon">♡</span>
            <p className="card-stack__empty-title">You&apos;ve seen everyone!</p>
            <p className="card-stack__empty-sub">Check back later for new profiles</p>
          </div>
        )}
      </div>

      <ActionButtons
        onPass={() => swipe('left')}
        onSuperLike={() => swipe('right')}
        onLike={() => swipe('right')}
      />

      {matchedProfile && (
        <MatchModal
          matchedProfile={matchedProfile}
          currentUserPhoto={MY_PHOTO}
          onClose={() => setMatchedProfile(null)}
          onMessage={() => setMatchedProfile(null)}
        />
      )}
    </div>
  )
}
