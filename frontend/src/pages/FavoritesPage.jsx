import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Axios } from 'axios'
import { string } from 'prop-types'
import withAutentication from '../hoc/withAuthentication'
import RecruitersPagesNavMenu from '../components/Header/RecruitersPagesNavMenu'
import Sidebar from '../components/Sidebar/Sidebar'
import { CrossIcon } from '../components/Icon/icons'
import Colors from '../sass/variables/_colors.scss'
import Footer from '../components/Footer/Footer'
import Headline from '../components/Headline/Headline'
import Favorites from '../components/Favorites/Favorites'
import ProfilePopUp from '../components/ProfilePopUp/ProfilePopUp'

function FavoritesPage({ axiosClient, userId }) {
  const [favoritePlayers, setFavoritePlayers] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axiosClient.get(`/api/v1/favorite/${userId}`).then((res) => setFavoritePlayers(res.data))
  }, [axiosClient, userId])

  const removeFav = async (favoriteId) => {
    await axiosClient.delete(`/api/v1/favorite/${favoriteId}`)
    setFavoritePlayers(favoritePlayers.filter((f) => f.favoriteId !== favoriteId))
  }

  return (
    <div className="favorites-page">
      <RecruitersPagesNavMenu className="nav-side-menu" />
      <div className="favorites-page-container">
        <Sidebar />
        <div className="favorites-content">
          <div className="nav">
            <CrossIcon onClick={() => navigate(-1)} className="userIcon" fill={Colors.primaryColorBrightGreen} />
            <ProfilePopUp />
          </div>
          {/* <div className="userIcon-wrapper">
            <UserIcon className="userIcon" fill={Colors.primaryColorBrightGreen} />
          </div> */}
          <div className="h1-wrapper">
            <Headline text="Favorites" color="#34FF9B" fontSize="48px" textAlign="center" className="headerFavorites" />
          </div>
          <div className="favorites-container">
            {favoritePlayers?.map((player) => (
              <Favorites
                summonerName={player.summonerName}
                playerRole={player.role}
                summonerIcon={player.profileIconId}
                removeFav={() => removeFav(player.favoriteId)}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

FavoritesPage.propTypes = {
  axiosClient: Axios,
  userId: string,
}

FavoritesPage.defaultProps = {
  axiosClient: Axios,
  userId: '',
}

export default withAutentication(FavoritesPage)
