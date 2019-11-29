import React from 'react'
import { withRouter } from 'react-router-dom'
import { Route, NavLink, Switch } from 'react-router-dom'

const style_wrapper = {outline: 'solid 1px black', padding: '10px', 'marginTop':'5px'}
const style_active = {color: 'red'}


const PathName = withRouter( // <-- withRouter passes history.location to the wrapped component
  ({location}) => (
    <div style={style_wrapper}>
      Current pathname: {location.pathname}
    </div>
  )
)



// Path Content
const Path_home    = () => <div>content that match "/"</div>
const Path_A       = () => <div>Content that match "/a"</div>
const Path_A_B     = () => <div>Content that match "/a/b"</div>
const Path_noMatch = () => <div>Path not match</div>




// App
const App = () => (
  <div style={style_wrapper}>

    <PathName/>

    <ul>
      <li><NavLink /* exact */ activeStyle={style_active} to="/"              >Link to: /</NavLink></li>
      <li><NavLink /* exact */ activeStyle={style_active} to="/a"             >Link to: /a</NavLink></li>
      <li><NavLink /* exact */ activeStyle={style_active} to="/a/b"           >Link to: /a/b</NavLink></li>
      <li><NavLink /* exact */ activeStyle={style_active} to="/does-not-exit" >Link to: /does-not-exist</NavLink></li>
    </ul>


    {/* ********************************

       Exact match

    ************************************ */}

    <div style={style_wrapper}>
      <Switch>
        <Route exact path="/"    ><Path_home /></Route>
        <Route exact path="/a"   ><Path_A /></Route>
        <Route exact path="/a/b" ><Path_A_B /></Route>
        <Route                   ><Path_noMatch /></Route>
      </Switch>
    </div>

    {/* ********************************

       Non-Exact match

    ************************************ */}

    <h4> Non-exect match: </h4>
    <div style={style_wrapper}>
      <Switch>
        <Route path="/"    ><Path_home /></Route>
        <Route path="/a"   ><Path_A /></Route>
        <Route path="/a/b" ><Path_A_B /></Route>
        <Route             ><Path_noMatch /></Route>
      </Switch>
    </div>
    {/* ********************************

       Non-Exact match reverse order

    ************************************ */}

    <h4> Non-exect match reverse order: </h4>
    <div style={style_wrapper}>
      <Switch>
        <Route path="/a/b" ><Path_A_B /></Route>
        <Route path="/a"   ><Path_A /></Route>
        <Route path="/"    ><Path_home /></Route>
        <Route             ><Path_noMatch /></Route>
      </Switch>
    </div>

  </div>
)

export {App}


