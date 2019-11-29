import _get from 'lodash/get'
import { actions } from './action'
import { makeNewTodo } from '../../model'



const mapAppStateToProps = appState => {
  const entryPoint = 'pageTodo'
  return { todos: _get(appState, `${entryPoint}.todos`, []) }
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
