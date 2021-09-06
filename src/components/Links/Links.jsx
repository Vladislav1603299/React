import { Link } from 'react-router-dom'
import HouseIcon from '@material-ui/icons/House'
import ChatIcon from '@material-ui/icons/Chat'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { ROUTER } from '../../routing/Constants/Constants'
import './Links.css'

const Links = () => {
  return (
    <div className="header">
      <ul className="header-link">
        <li>
          <Link to={ROUTER.HOME}>
            <HouseIcon style={{ color: 'black' }} />
          </Link>
        </li>
        <li>
          <Link to={ROUTER.CHATS}>
            <ChatIcon style={{ color: 'black' }} />
          </Link>
        </li>
        <li>
          <Link to={ROUTER.PROFILR}>
            <AccountCircleIcon style={{ color: 'black' }} />
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Links
