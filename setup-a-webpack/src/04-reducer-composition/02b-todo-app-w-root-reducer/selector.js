import { actions } from './action'
import { makeNewTodo } from './model'



const mapAppStateToProps = appState => {
  // appState = {
  //   todos: [{}, {}, {}, ...]
  // }
  const todos = appState.todos
  return { 
    todos 
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
