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


// Router Components
// =====================
  const Path_home    = () => <div>content that match "/"</div>

  const Path_A = ({match}) => <>
    <div>Content that match "/a/:foo"</div>
    <div>params: {JSON.stringify(match.params, null, 2)}</div>
  </>

  const Path_A_B = ({match}) => <>
    <div>Content that match "/a/:foo/b/:bar"</div>
    <div>params: {JSON.stringify(match.params, null, 2)}</div>
  </>

  const Path_noMatch = () => <div>Path not match</div>



// Wrap in HOC withRouter
// ======================
  const WithRouter_Path_A = withRouter( (props) => <Path_A {...props}  />)
  const WithRouter_Path_A_B = withRouter( (props) => <Path_A_B {...props}  />)




// App
// =====
const App = () => (
  <div style={style_wrapper}>

    <PathName/>

    <ul>
      <li><NavLink exact activeStyle={style_active} to="/"              >Link to: /              </NavLink></li>
      <li><NavLink exact activeStyle={style_active} to="/a/foo"         >Link to: /a/foo         </NavLink></li>
      <li><NavLink exact activeStyle={style_active} to="/a/foo/b/bar"   >Link to: /a/foo/b/bar   </NavLink></li>
      <li><NavLink exact activeStyle={style_active} to="/does-not-exit" >Link to: /does-not-exist</NavLink></li>
    </ul>


    {/* *******************************************************************

      This will not work
      ==================
      because match.params is not available in the path components


      <div style={style_wrapper}>
        <Switch>
          <Route exact path="/"              ><Path_home    /></Route>
          <Route exact path="/a/:foo"        ><Path_A       /></Route>
          <Route exact path="/a/:foo/b/:bar" ><Path_A_B     /></Route>
          <Route                             ><Path_noMatch /></Route>
        </Switch>
      </div>


      options 1 (use component)
      =========================
        Would create a new component every render. This results in the
        existing component unmounting and the new component mounting instead
        of just updating the existing component.

    ************************************************************************* */}

    <div style={style_wrapper}>
      <Switch>
        <Route exact path="/"              component={Path_home}   />
        <Route exact path="/a/:foo"        component={Path_A}      />
        <Route exact path="/a/:foo/b/:bar" component={Path_A_B }   />
        <Route                             component={Path_noMatch}/>
      </Switch>
    </div>



    {/* *********************************************************************

      Options 2 (use render)
      =======================
        without the undesired remounting explained above.

    ************************************************************************* */}

    <div style={style_wrapper}>
      <Switch>
        <Route exact path="/"              render={(     )=><Path_home />           } />
        <Route exact path="/a/:foo"        render={(props)=><Path_A   {...props} /> } />
        <Route exact path="/a/:foo/b/:bar" render={(props)=><Path_A_B {...props} /> } />
        <Route                             render={(     )=><Path_noMatch />        } />
      </Switch>
    </div>





    {/* *********************************************************************

      Options 3 (wrap in HOC withRouter())
      ====================================

    ********************************************************************** */}

    <div style={style_wrapper}>
      <Switch>
        <Route exact path="/"              ><Path_home /></Route>
        <Route exact path="/a/:foo"        ><WithRouter_Path_A /></Route>
        <Route exact path="/a/:foo/b/:bar" ><WithRouter_Path_A_B /></Route>
        <Route                             ><Path_noMatch /></Route>
      </Switch>
    </div>


    {/* *********************************************************************

      Alternate options 4 (use hook) **NEW**
      ======================================

        https://reacttraining.com/react-router/web/api/Hooks/useparams

    ************************************************************************* */}

  </div>
)

export {App}


