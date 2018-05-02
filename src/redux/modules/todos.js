import Const from 'src/const'
const { VisibilityType } = Const

// Actions
const ADD_TODO = '/tutorial/todos/ADD_TODO'
const SET_VISIBILITY_FILTER = '/tutorial/todos/SET_VISIBILITY_FILTER'
const TOGGLE_TODO = '/tutorial/todos/TOGGLE_TODO'

let nextTodoId = 0
export const addTodo = text => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text
})
 
export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
})
 
export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
})


// Reducers
const initialState = {
  todos: [],
  filter: VisibilityType.SHOW_ALL
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      }
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          (todo.id === action.id)
            ? {...todo, completed: !todo.completed}
            : todo
        )
      }
    case SET_VISIBILITY_FILTER:
      return {
        ...state,
        filter: action.filter
      }
    default:
      return state
  }
}
 
