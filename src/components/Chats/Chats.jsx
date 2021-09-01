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
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom'
import { ROUTER } from '../Constants/Constants'

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
    setChat(INITIAL_CHATS.push({ name: '', text: '' }))
  }

  return (
    <div>
      <BrowserRouter>
        <div className="list">
          <div>
            <List to={ROUTER.CHAT1} className={classes.root}>
              {chat.map((ch) => {
                return (
                  <Link>
                    <div key={ch.id}>
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                          <Avatar
                            alt="Remy Sharp"
                            src="/static/images/avatar/1.jpg"
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary={ch.text}
                          secondary={
                            <React.Fragment>
                              <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                              >
                                {ch.name}
                              </Typography>
                              {
                                " — I'll be in your neighborhood doing errands this…"
                              }
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                    </div>
                  </Link>
                )
              })}
            </List>
          </div>
          <Switch>
            <Route path={ROUTER.CHAT1}>
              <MessageChat />
            </Route>
            <Route path={ROUTER.CHAT2}>
              <MessageChat />
            </Route>
            <Route path={ROUTER.CHAT3}>
              <MessageChat />
            </Route>
            <Route path={ROUTER.CHAT4}>
              <MessageChat />
            </Route>
            <Route path={ROUTER.CHAT5}>
              <MessageChat />
            </Route>
            <Route path={ROUTER.CHAT6}>
              <MessageChat />
            </Route>
            <Route path={ROUTER.CHAT7}>
              <MessageChat />
            </Route>
            <Route path={ROUTER.CHAT8}>
              <MessageChat />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default Chats
