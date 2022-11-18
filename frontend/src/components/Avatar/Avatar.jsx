import PropTypes from 'prop-types'
import Image from '../Image/Image'
import RoleIcons from '../RoleIcons/RoleIcons'
import Colors from '../../sass/variables/_colors.scss'

function Avatar({ summonerIcon, role, alt, imageWidth, imageHeight, avatarWidth, avatarHeight }) {
  return (
    <div className="avatar" style={{ width: avatarWidth, height: avatarHeight }}>
      <Image
        radius="50%"
        imageUrl={summonerIcon}
        imageHeight={imageHeight}
        imageWidth={imageWidth}
        imageBorder={`2px solid ${Colors.primaryColorBrightGreen}`}
        alt={alt}
      />
      <div className="role">{RoleIcons(role)}</div>
    </div>
  )
}

export default Avatar

Avatar.propTypes = {
  summonerIcon: PropTypes.string,
  role: PropTypes.oneOf(['JUNGLE', 'TOP', 'MIDDLE', 'CARRY', 'SUPPORT']),
  alt: PropTypes.string,
  imageWidth: PropTypes.string,
  imageHeight: PropTypes.string,
  avatarWidth: PropTypes.string,
  avatarHeight: PropTypes.string,
}

Avatar.defaultProps = {
  summonerIcon: 'https://ddragon.leagueoflegends.com/cdn/12.20.1/img/profileicon/27.png',
  role: '',
  alt: 'Player Icon',
  imageWidth: '110px',
  imageHeight: '110px',
  avatarWidth: '',
  avatarHeight: '',
}
