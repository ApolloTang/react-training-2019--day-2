import { withRouter } from 'react-router-dom'

const style_wrapper = {outline: 'solid 1px black', padding: '10px', 'marginTop':'5px'}

const CurrentPath = withRouter( // <-- withRouter passes history.location to the wrapped component
  ({location}) => (
    <div style={style_wrapper}>
      Current pathname: {location.pathname}
    </div>
  )
)


export {CurrentPath}
