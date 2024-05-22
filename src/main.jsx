import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
import { Provider } from 'react-redux'
import { store } from '../redux-toolkit/store/store.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import App2 from './App2.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App2 />
  </Provider>,
)
