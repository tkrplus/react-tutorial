import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from 'src/redux/ReducersStores'
import App from 'src/components/App'
 
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
