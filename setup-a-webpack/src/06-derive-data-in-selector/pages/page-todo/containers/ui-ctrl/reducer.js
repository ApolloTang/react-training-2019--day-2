import { actionNames } from './action'


const initialState = { filterType:'all' }


// todoFilterControl
function reducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case actionNames.todos_uiCtrl_setFilter: {
      const filterType = action.payload.filterType
      return {
        ...state,
        filterType
      }
    }
    default:
      return state
  }
}

export {
  reducer
}
