import { Link } from 'react-router-dom'
import HouseIcon from '@material-ui/icons/House'
import ChatIcon from '@material-ui/icons/Chat'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import { ROUTES } from '../../Routing/constants'
import './Links.css'

export const Links = () => {
  return (
    <div className="header">
      <ul className="header-link">
        <li>
          <Link to={ROUTES.MAIN}>
            <HouseIcon style={{ color: 'black' }} />
          </Link>
        </li>
        <li>
          <Link to={ROUTES.CHATS}>
            <ChatIcon style={{ color: 'black' }} />
          </Link>
        </li>
        <li>
          <Link to={ROUTES.PROFILE}>
            <AccountCircleIcon style={{ color: 'black' }} />
          </Link>
        </li>
        <li>
          <Link to={ROUTES.PHOTOS}>
            <PhotoLibraryIcon style={{ color: 'black' }} />
          </Link>
        </li>
      </ul>
    </div>
  )
}
