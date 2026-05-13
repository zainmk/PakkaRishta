import { useState } from 'react'
import TopNav from './components/TopNav'
import BottomNav from './components/BottomNav'
import DiscoverScreen from './screens/DiscoverScreen'
import MessagesScreen from './screens/MessagesScreen'
import ProfileScreen from './screens/ProfileScreen'
import './styles/global.css'
import './App.css'

export default function App() {
  const [activeScreen, setActiveScreen] = useState('discover')
  const [selectedProfile, setSelectedProfile] = useState(null)

  return (
    <div className="app">
      <TopNav />
      <main className="app__main">
        {activeScreen === 'discover' && (
          <DiscoverScreen onViewProfile={setSelectedProfile} />
        )}
        {(activeScreen === 'matches' || activeScreen === 'messages' || activeScreen === 'profile') && (
          <MessagesScreen onViewProfile={setSelectedProfile} />
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
