import React from 'react'
import PropTypes from 'prop-types'
import SingleTodo from './SingleTodo'
 
const TodoList = props => {
  const { todos, toggleTodo } = props
  return (
    <ul>
      {todos.map(todo =>
        <SingleTodo
          key={todo.id}
          {...todo}
          onClick={() => toggleTodo(todo.id)}
        />
      )}
    </ul>
  )
}
 
TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
}
 
export default TodoList
