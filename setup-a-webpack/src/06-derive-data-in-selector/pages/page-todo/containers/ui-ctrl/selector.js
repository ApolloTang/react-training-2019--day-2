import _get from 'lodash/get'
import { actions } from './action'



const mapAppStateToProps = appState => {
  return {
    currentFilterType: _get(appState, 'pageTodo.uiControl.filterType', 'all')
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch_setFilterType (filterType) { dispatch( actions.todos_setFilter(filterType) ) }
})

export {mapAppStateToProps, mapDispatchToProps}
