import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from 'src/redux/ReducersStores'
import App from 'src/App'
 
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
