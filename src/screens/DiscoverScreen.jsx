import { useState } from 'react'
import CardStack from '../components/CardStack'
import { profiles } from '../data/profiles'
import './DiscoverScreen.css'

export default function DiscoverScreen() {
  const [matches, setMatches] = useState([])

  const handleMatch = (profile) => {
    setMatches((prev) => [...prev, profile])
  }

  return (
    <div className="discover-screen">
      <CardStack profiles={profiles} onMatch={handleMatch} />
    </div>
  )
}
