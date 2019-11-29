import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Home    } from './pages/home'
import { NoMatch } from './pages/no-match'
import { PageA   } from './pages/page-a'
import { PageB   } from './pages/page-b'

const style_wrapper = {outline: 'solid 1px black', padding: '10px', 'marginTop':'5px'}

const Routes = () => (
  <div style={style_wrapper}>
    <Switch>
      <Route exact path="/"  component={Home} />
      <Route exact path="/a"><PageA /></Route>
      <Route exact path="/b"><PageB /></Route>
      <Route><NoMatch /></Route>
    </Switch>
  </div>
)

export {Routes}


