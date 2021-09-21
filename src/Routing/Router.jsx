import { Switch, Redirect } from 'react-router-dom'
import { ROUTES } from './constants'
import Home from '../Screens/Home/Home'
import { Profile } from '../Screens/Profile/Profile'
import { Chats } from '../Screens/Chats/Chats'
import { NoChats } from '../Screens/NoChats/NoChats'
import Photos from '../Screens/Photos/Photos'
import { PublicRoute } from '../HOC/PublicRoute'
import { PrivateRoute } from '../HOC/PrivateRoute'
import Singup from '../Screens/Singup/Singup'
import Signin from '../Screens/Signin/Signin'

export const Router = ({ authenticated }) => {
  return (
    <Switch>
      <PublicRoute exact path={ROUTES.MAIN} authenticated={authenticated}>
        <Home />
      </PublicRoute>
      <PublicRoute exact path={ROUTES.SIGNIN} authenticated={authenticated}>
        <Signin />
      </PublicRoute>
      <PublicRoute exact path={ROUTES.SIGNUP} authenticated={authenticated}>
        <Singup />
      </PublicRoute>
      <PrivateRoute exact path={ROUTES.PROFILE} authenticated={authenticated}>
        <Profile />
      </PrivateRoute>
      <PrivateRoute exact path={ROUTES.CHATS} authenticated={authenticated}>
        <Chats />
      </PrivateRoute>
      <PrivateRoute exact path={ROUTES.PHOTOS} authenticated={authenticated}>
        <Photos />
      </PrivateRoute>
      <PrivateRoute path={ROUTES.NO_CHAT} authenticated={authenticated}>
        <NoChats />
      </PrivateRoute>
      <PrivateRoute path={ROUTES.NOT_FOUND} authenticated={authenticated}>
        Page not found 404
      </PrivateRoute>
      <PrivateRoute path="*" authenticated={authenticated}>
        <Redirect to={ROUTES.NOT_FOUND} />
      </PrivateRoute>
    </Switch>
  )
}
