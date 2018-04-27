import {
  applyMiddleware,
  combineReducers,
  createStore
} from 'redux'
import logger from 'redux-logger'
import todos from './modules/todos'
 
const reducer = combineReducers({
  todos
})

export default createStore(
  reducer,
  applyMiddleware(logger)
)
