import { Provider } from 'react-redux'
import firebase from 'firebase/app'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import { Router } from './Routing/Router'
import { theme } from './Theme/theme'
import { store } from './Store/index'
import './App.css'
import { Links } from './Components/Links/Links'
import { useEffect, useState } from 'react'

const App = () => {
  const [authenticated, setAuthenticated] = useState(false)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setAuthenticated(true)
      } else {
        setAuthenticated(false)
      }
    })
  }, [])
  return (
    <div className="App">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Links />
            <Router authenticated={authenticated} />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </div>
  )
}

export default App
