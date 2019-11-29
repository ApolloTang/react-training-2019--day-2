import _get from 'lodash/get'
import { actions } from './action'
import { makeNewTodo } from '../../model'
import queryString from 'query-string'


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


const mapAppStateToProps = (appState, ownProps) => {
  const urlSearchQuery = queryString.parse(ownProps.location.search)

  const currentFilterType = urlSearchQuery.filterType
  const unFilteredTodos = _get(appState, 'pageTodo.todos', [])
  const filteredTodos = getFilteredTodos(unFilteredTodos, currentFilterType)
  return {
    todos: filteredTodos,
    currentFilterType
  }
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
