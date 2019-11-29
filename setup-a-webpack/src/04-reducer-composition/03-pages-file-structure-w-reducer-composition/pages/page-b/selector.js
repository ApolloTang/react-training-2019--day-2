import _get from 'lodash/get'
import { actions } from './action'

const mapAppStateToProps = appState => {
  // appState = pageB:{
  //   counter: {
  //     count:0
  //   }
  // }  //<--- the shape of store
  const count = _get(appState, 'pageB.counter.count', 0)

  return {
    count
  }
}


const mapDispatchToProps = dispatch => (
  {
    dispatch_increase() { dispatch(actions.counter_increase()) },
    dispatch_decrease() { dispatch(actions.counter_decrease()) },
  }
)



export {
  mapAppStateToProps,
  mapDispatchToProps,

}
