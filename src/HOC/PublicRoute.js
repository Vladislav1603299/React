import { Redirect, Route } from "react-router";
import { ROUTES } from "../Routing/constants";

export const PublicRoute = ({ authenticated, ...rest }) =>
  !authenticated ? <Route {...rest} /> : <Redirect to={ROUTES.CHATS} />;
