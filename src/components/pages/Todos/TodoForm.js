import React from 'react'
import PropTypes from 'prop-types'

const TodoForm = props => {
  const {
    addTodo,
  } = props
  let input

  const onSubmit = (e) => {
    e.preventDefault()
    if (!input.value.trim()) {
      return
    }
    addTodo(input.value)
    input.value = ''
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
 
TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default TodoForm
