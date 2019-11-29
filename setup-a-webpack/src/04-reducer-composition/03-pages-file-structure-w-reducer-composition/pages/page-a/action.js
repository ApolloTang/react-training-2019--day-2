const actionNames = {
  pageA_counter_increase: 'pageA_counter_increase',
  pageA_counter_decrease: 'pageA_counter_decrease',
}



const counter_increase = () => ({
  type: actionNames.pageA_counter_increase,
})
const counter_decrease = () => ({
  type: actionNames.pageA_counter_decrease,
})



const actions = {
  counter_increase,
  counter_decrease,
}



export {
  actionNames,
  actions
}

