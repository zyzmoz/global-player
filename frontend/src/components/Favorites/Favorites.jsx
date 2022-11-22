import PropTypes from 'prop-types'
import Headline from '../Headline/Headline'
import Image from '../Image/Image'
import Colors from '../../sass/variables/_colors.scss'
import Avatar from '../Avatar/Avatar'
import { VectorIcon, DeleteIcon2 } from '../Icon/icons'
import RoleIcons from '../RoleIcons/RoleIcons'

function Favorites({ summonerName, summonerIcon, playerRole, contactFunc, removeFav }) {
  return (
    <section className="player-information-wrapper">
      <div className="border-wrapper">
        <div className="player-information-detail">
          <div className="summoner-division-embled-container">
            <div className="name-division-container">
              <Headline text={summonerName} color={Colors.primaryColorBrightGreen} />
              <Headline text="Challanger" />
              <Image
                imageUrl="https://support-leagueoflegends.riotgames.com/hc/article_attachments/4415894930323/Challenger_Emblem_2022.png"
                imageWidth="100px"
                imageHeight="auto"
              />
            </div>
          </div>
          <div className="avatar-icons-container">
            <Avatar
              summonerIcon={`https://ddragon.leagueoflegends.com/cdn/12.20.1/img/profileicon/${summonerIcon}.png`}
              alt="player icon"
            />
            <div className="role-icon-wrapper"> {RoleIcons(`${playerRole}`, 'white')}</div>
            <button type="button" className="heartIconFav" onClick={removeFav}>
              <VectorIcon stroke={Colors.primaryColorBrightGreen} className="heartIconItem" />
            </button>
          </div>
          <button onClick={contactFunc} type="button" className="contactPlayerButton">
            {' '}
            Contact player
          </button>
          <div className="hexagon">
            <button type="button" className="removeFav" onClick={removeFav}>
              <p className="visually-hidden">Remove Favorite</p>
              <DeleteIcon2 fill={Colors.primaryColorBrightGreen} stroke={Colors.primaryColorBrightGreen} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

Favorites.propTypes = {
  summonerName: PropTypes.string,
  summonerIcon: PropTypes.string,
  playerRole: PropTypes.string,
  contactFunc: PropTypes.func,
  removeFav: PropTypes.func,
}

Favorites.defaultProps = {
  summonerName: 'MissingName',
  summonerIcon: 'https://ddragon.leagueoflegends.com/cdn/12.20.1/img/profileicon/27.png',
  playerRole: '',
  contactFunc: '',
  removeFav: '',
}

export default Favorites
