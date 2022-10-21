import PropTypes from 'prop-types'
import { JungleIcon, MidLaneIcon, TopLaneIcon, BotLaneIcon, SupportIcon } from '../Icon/icons'
import Image from '../Image/Image'

function Avatar({ summonerIcon, role, alt }) {
  const RoleIcon = {
    JUNGLE: <JungleIcon fill="black" stroke="black" />,
    TOP: <TopLaneIcon fill="black" stroke="black" />,
    MIDDLE: <MidLaneIcon fill="black" stroke="black" />,
    CARRY: <BotLaneIcon fill="black" stroke="black" />,
    SUPPORT: <SupportIcon fill="black" stroke="black" />,
  }

  return (
    <div className="avatar">
      <Image radius="50%" imageUrl={summonerIcon} imageHeight="110px" imageWidth="110px" imageBorder="2px" alt={alt} />
      <div className="role">{RoleIcon[role]}</div>
    </div>
  )
}

export default Avatar

Avatar.propTypes = {
  summonerIcon: PropTypes.string,
  role: PropTypes.oneOf(['JUNGLE', 'TOP', 'MIDDLE', 'CARRY', 'SUPPORT']),
  alt: PropTypes.string,
}

Avatar.defaultProps = {
  summonerIcon: 'https://ddragon.leagueoflegends.com/cdn/12.20.1/img/profileicon/27.png',
  role: 'SUPPORT',
  alt: 'Player Icon',
}
