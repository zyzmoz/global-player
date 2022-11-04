import PropTypes from 'prop-types'
import Image from '../Image/Image'
import RoleIcons from '../RoleIcons/RoleIcons'

function Avatar({ summonerIcon, role, alt }) {
  return (
    <div className="avatar">
      <Image radius="50%" imageUrl={summonerIcon} imageHeight="110px" imageWidth="110px" imageBorder="2px" alt={alt} />
      <div className="role">{RoleIcons(role)}</div>
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
