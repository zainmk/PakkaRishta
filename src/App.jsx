import { useState } from 'react'
import TopNav from './components/TopNav'
import BottomNav from './components/BottomNav'
import DiscoverScreen from './screens/DiscoverScreen'
import MatchesScreen from './screens/MatchesScreen'
import './styles/global.css'
import './App.css'

const SCREENS = {
  discover: DiscoverScreen,
  matches: MatchesScreen,
  messages: MatchesScreen,
  profile: MatchesScreen,
}

export default function App() {
  const [activeScreen, setActiveScreen] = useState('discover')

  const Screen = SCREENS[activeScreen] ?? DiscoverScreen

  return (
    <div className="app">
      <TopNav />
      <main className="app__main">
        <Screen />
      </main>
      <BottomNav active={activeScreen} onChange={setActiveScreen} />
    </div>
  )
}
