import { withRouter } from 'react-router-dom'

import { ConnectedApp  } from './containers/todo-list/'

const PageTodo = withRouter(
  ConnectedApp
)

export { PageTodo }

