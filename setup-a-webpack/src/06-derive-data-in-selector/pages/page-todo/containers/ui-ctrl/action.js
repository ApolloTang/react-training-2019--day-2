const actionNames = {
  todos_uiCtrl_setFilter: 'todos_uiCtrl_setFilter',
}

const todos_setFilter = (filterType) => ({
  type: actionNames.todos_uiCtrl_setFilter,
  payload: { filterType }
})


const actions = {
  todos_setFilter,
}



export {
  actionNames,
  actions
}

