import { connect } from 'react-redux'
import Todos from './Todos'
import {
  addTodo,
  setVisibilityFilter,
  toggleTodo
} from 'src/redux/modules/todos'
import Const from '../../../const'
const { VisibilityType } = Const
 
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityType.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityType.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    case VisibilityType.SHOW_ALL:
    default:
      return todos
  }
}

const mapStateToProps = (state, ownProps) => ({
  todos: getVisibleTodos(state.todos.todos, state.todos.filter),
  filter: state.todos.filter
})
 
const mapDispatchToProps = (dispatch) => ({
  setVisibilityFilter: filter => dispatch(setVisibilityFilter(filter)),
  toggleTodo: id => dispatch(toggleTodo(id)),
  addTodo: value => dispatch(addTodo(value))
})
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos)
