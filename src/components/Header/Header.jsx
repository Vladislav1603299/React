import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Chats from '../Chats/Chats'
import Home from '../Home/Home'
import Profile from '../Profile/Profile'
import './Header.css'
import HouseIcon from '@material-ui/icons/House'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import ChatIcon from '@material-ui/icons/Chat'
import { ROUTER } from '../Constants/Constants'
import Page404 from '../Page404/Page404'

const Header = () => {
  return (
    <BrowserRouter>
      <div>
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
        <div>
          <Switch>
            <Route exact path={ROUTER.HOME}>
              <Home />
            </Route>
            <Route exact path={ROUTER.CHATS}>
              <Chats />
            </Route>
            <Route path={ROUTER.PROFILR}>
              <Profile />
            </Route>
            <Route>
              <Page404 />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Header
