import RecruitersPagesNavMenu from '../components/Header/RecruitersPagesNavMenu'
import Sidebar from '../components/Sidebar/Sidebar'
import { UserIcon } from '../components/Icon/icons'
import Colors from '../sass/variables/_colors.scss'
import Footer from '../components/Footer/Footer'
import Headline from '../components/Headline/Headline'
import Favorites from '../components/Favorites/Favorites'

function FavoritesPage() {
  return (
    <div className="favorites-page">
      <RecruitersPagesNavMenu className="nav-side-menu" />
      <div className="favorites-page-container">
        <Sidebar />
        <div className="favorites-content">
          <div className="userIcon-wrapper">
            <UserIcon className="userIcon" fill={Colors.primaryColorBrightGreen} />
          </div>
          <div className="h1-wrapper">
            <Headline text="Favorites" color="#34FF9B" fontSize="48px" textAlign="center" className="headerFavorites" />
          </div>
          <div className="favorites-container">
            <Favorites playerRole="Jungle" />
            <Favorites playerRole="Support" />
            <Favorites playerRole="Middle" />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default FavoritesPage
