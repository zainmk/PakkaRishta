import CardStack from '../components/CardStack'
import { profiles } from '../data/profiles'
import './DiscoverScreen.css'

export default function DiscoverScreen({ onViewProfile, onMatch }) {
  return (
    <div className="discover-screen">
      <CardStack profiles={profiles} onViewProfile={onViewProfile} onMatch={onMatch} />
    </div>
  )
}
