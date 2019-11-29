const actionNames = {
  pageB_counter_increase: 'pageB_counter_increase',
  pageB_counter_decrease: 'pageB_counter_decrease',
}



const counter_increase = () => ({
  type: actionNames.pageB_counter_increase,
})
const counter_decrease = () => ({
  type: actionNames.pageB_counter_decrease,
})



const actions = {
  counter_increase,
  counter_decrease,
}



export {
  actionNames,
  actions
}

