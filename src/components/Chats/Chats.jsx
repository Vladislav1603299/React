import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { INITIAL_CHATS } from '../Constants/Constants'
import MessageChat from './MessageChat'
import './Message.css'
import { Link, Route, Switch, BrowserRouter, useParams } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',

    maxWidth: '36ch',

    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}))

const Chats = () => {
  const classes = useStyles()

  const [chat, setChat] = useState(INITIAL_CHATS)

  const changeMessageList = () => {
    setChat(INITIAL_CHATS.push({ name: '', text: '', way: '', id: '' }))
  }
  const deleteMessageList = () => {
    setChat(INITIAL_CHATS.pop({ name: '', text: '', way: '', id: '' }))
  }

  return (
    <BrowserRouter>
      <div>
        <div className="list">
          <div>
            <List className={classes.root}>
              {chat.map((chat) => {
                return (
                  <div>
                    <Link to={chat.way}>
                      <ListItem key={chat.id} alignItems="flex-start">
                        <ListItemAvatar>
                          <Avatar
                            alt="Remy Sharp"
                            src="/static/images/avatar/1.jpg"
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary={chat.text}
                          secondary={
                            <React.Fragment>
                              <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                              >
                                {chat.name}
                              </Typography>
                              {
                                " — I'll be in your neighborhood doing errands this…"
                              }
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                    </Link>
                    <Divider variant="inset" component="li" />
                  </div>
                )
              })}
            </List>
          </div>

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
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Chats
