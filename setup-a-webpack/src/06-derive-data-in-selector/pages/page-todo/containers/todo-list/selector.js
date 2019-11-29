import _get from 'lodash/get'
import { actions } from './action'
import { makeNewTodo } from '../../model'


const getFilteredTodos = (todos, filterType='all') => todos.filter( todo=>{
  switch (filterType) {
    case 'all':
      return true
    case 'completed':
      return todo.completed
    case 'active':
      return !todo.completed
    default:
      return true
  }
})


const mapAppStateToProps = appState => {
  const filterType = _get(appState, 'pageTodo.uiControl.filterType', 'all')
  const unFilteredTodos = _get(appState, 'pageTodo.todos', [])
  const filteredTodos = getFilteredTodos(unFilteredTodos, filterType)
  return { todos: filteredTodos }
}



const mapDispatchToProps = dispatch => (
  {
    dispatch_addTodo(newTodoText) {
      const newTodo = makeNewTodo(newTodoText)
      dispatch(actions.todos_add(newTodo) )
    },
    dispatch_deleteTodo(id)   { dispatch( actions.todos_delete(id)   ) },
    dispatch_toggleTodo(id)   { dispatch( actions.todos_toggle(id)   ) }
  }
)



export {
  mapAppStateToProps,
  mapDispatchToProps,
  makeNewTodo
}
