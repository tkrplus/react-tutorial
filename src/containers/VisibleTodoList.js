import { connect } from 'react-redux'
import Const from '../const'
import { toggleTodo } from '../redux/modules/todos'
import TodoList from '../components/TodoList'
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
 
const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos.todos, state.todos.filter)
})
 
const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
