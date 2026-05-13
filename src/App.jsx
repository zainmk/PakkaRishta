import { useState } from 'react'
import TopNav from './components/TopNav'
import BottomNav from './components/BottomNav'
import DiscoverScreen from './screens/DiscoverScreen'
import MatchesScreen from './screens/MatchesScreen'
import MessagesScreen from './screens/MessagesScreen'
import ProfileScreen from './screens/ProfileScreen'
import './styles/global.css'
import './App.css'

export default function App() {
  const [activeScreen, setActiveScreen] = useState('discover')
  const [selectedProfile, setSelectedProfile] = useState(null)
  const [matches, setMatches] = useState([])

  const handleMatch = (profile) => {
    setMatches((prev) => prev.find(p => p.id === profile.id) ? prev : [...prev, profile])
  }

  return (
    <div className="app">
      <TopNav />
      <main className="app__main">
        {activeScreen === 'discover' && (
          <DiscoverScreen onViewProfile={setSelectedProfile} onMatch={handleMatch} />
        )}
        {activeScreen === 'matches' && (
          <MatchesScreen matches={matches} onViewProfile={setSelectedProfile} />
        )}
        {(activeScreen === 'messages' || activeScreen === 'profile') && (
          <MessagesScreen matches={matches} />
        )}
      </main>
      <BottomNav active={activeScreen} onChange={setActiveScreen} />
      {selectedProfile && (
        <ProfileScreen
          profile={selectedProfile}
          onClose={() => setSelectedProfile(null)}
        />
      )}
    </div>
  )
}
