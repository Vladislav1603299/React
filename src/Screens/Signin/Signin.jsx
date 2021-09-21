import { useState } from 'react'
import firebase from 'firebase/app'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../Routing/constants'
import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '285px',
    },
  },
}))

const useStylesButton = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '285px',
    },
  },
}))

const Signin = () => {
  const classes = useStyles()
  const classesButton = useStylesButton()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleButtonClick = async () => {
    setError('')
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
      //await firebase.auth().createUserWithEmailAndPassword(email, password)
      //await firebase.auth().signOut()
    } catch (error) {
      console.log(error)
      setError(error.message || 'Error')
    }
  }

  return (
    <div style={{ marginTop: '200px' }}>
      <div
        style={{
          border: '1px solid black',
          width: '400px',
          margin: '0 auto',
          height: '300px',
        }}
      >
        <div>
          <h2 style={{ textAlign: 'center' }}>Entrance</h2>
        </div>
        <form
          className={classes.root}
          style={{ margin: '0 auto', width: '300px', marginTop: '20px' }}
        >
          <div>
            <TextField
              id="outlined-search"
              label="Adress mail"
              type="text"
              variant="outlined"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div>
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className={classesButton.root}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleButtonClick}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
      <div>
        <p style={{ textAlign: 'center' }}>
          Register <Link to={ROUTES.SIGNUP}>Sign up</Link>
        </p>
        <p style={{ textAlign: 'center' }}>{error}</p>
      </div>
    </div>
  )
}

export default Signin
