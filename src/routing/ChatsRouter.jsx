import { Route, Switch } from 'react-router-dom'
import MessageChat from '../components/ChatsFile/MessageChat'

const ChatsRouter = () => {
  return (
    <Switch>
      <Route path="/chats/1">
        <MessageChat />
      </Route>
      <Route path="/chats/2">
        <MessageChat />
      </Route>
      <Route path="/chats/3">
        <MessageChat />
      </Route>
      <Route path="/chats/4">
        <MessageChat />
      </Route>
      <Route path="/chats/5">
        <MessageChat />
      </Route>
      <Route path="/chats/6">
        <MessageChat />
      </Route>
      <Route path="/chats/7">
        <MessageChat />
      </Route>
      <Route path="/chats/8">
        <MessageChat />
      </Route>
      <Route path="/chats/9">
        <MessageChat />
      </Route>
      <Route path="/chats/10">
        <MessageChat />
      </Route>
    </Switch>
  )
}

export default ChatsRouter
