import React from 'react'
import PropTypes from 'prop-types'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import Footer from './Footer'

const Todos = props => {
  const {
    setVisibilityFilter,
    addTodo,
    todos,
    toggleTodo
  } = props
  return (
    <div>
      <TodoForm
        addTodo={addTodo}
      />
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
      />
      <Footer
        setVisibilityFilter={setVisibilityFilter}
      />
    </div>
  )
}

Footer.propTypes = {
  setVisibilityFilter: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default Todos
