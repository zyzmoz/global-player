import { JungleIcon, MidLaneIcon, TopLaneIcon, BotLaneIcon, SupportIcon } from '../Icon/icons'

function RoleIcons(role, color) {
  const roles = {
    JUNGLE: <JungleIcon fill={color ?? 'black'} />,
    TOP: <TopLaneIcon fill={color ?? 'black'} />,
    MIDDLE: <MidLaneIcon fill={color ?? 'black'} />,
    CARRY: <BotLaneIcon fill={color ?? 'black'} />,
    BOTTOM: <BotLaneIcon fill={color ?? 'black'} />,
    SUPPORT: <SupportIcon fill={color ?? 'black'} />,
  }

  return roles[role.toUpperCase()]
}

export default RoleIcons
