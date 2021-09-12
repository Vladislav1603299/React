import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'

import { Router } from './Routing/Router'
import { theme } from './Theme/theme'
import { store } from './Store/index'
import './App.css'
import { Links } from './Components/Links/Links'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Links />
            <Router />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </div>
  )
}

export default App
