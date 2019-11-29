import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Home }          from './pages/home/'
import { NoMatch }       from './pages/no-match/'
import { PageA }         from './pages/page-a/'
import { PageTodo }      from './pages/page-todo/'
import { PageSubreddit } from './pages/page-subreddit/'

const style_wrapper = {outline: 'solid 1px black', padding: '10px', 'marginTop':'5px'}


const Routes = () => (
  <div style={style_wrapper}>
    <Switch>
      <Route exact path="/"  component={Home} />
      <Route exact path="/page-a"><PageA /></Route>
      <Route exact path="/page-todo"><PageTodo /></Route>
      <Route exact path="/page-subreddit"><PageSubreddit /></Route>
      <Route><NoMatch /></Route>
    </Switch>
  </div>
)

export { Routes }


