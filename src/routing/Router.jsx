import { Route, Switch, Redirect } from 'react-router-dom'
import { ROUTER } from './Constants/Constants'
import Home from '../screens/Home/Home'
import Chats from '../screens/Chats/Chats'
import Profile from '../screens/Profile/Profile'
import Page404 from '../components/Page404/Page404'

const Router = () => {
  return (
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
          <Redirect to={ROUTER.NOT_FOUND} />
          <Page404 />
        </Route>
      </Switch>
    </div>
  )
}

export default Router
