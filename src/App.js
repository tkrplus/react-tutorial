import React from 'react'
import {
  HashRouter,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import Todos from 'src/components/pages/Todos'
 
const App = () => (
  <HashRouter>
    <div>
      <Route path='/todos' component={Todos} />
      <Route exact
        path='/'
        render={() => <Redirect to='todos' />}
      />
    </div>
  </HashRouter>
)
 
export default App
