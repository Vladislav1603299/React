import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Links from './components/Links/Links'
import Router from './routing/Router'
import { Provider } from 'react-redux'
import { store } from '../src/store/index'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Links />
          <Router />
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
