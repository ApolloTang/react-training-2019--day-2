import React from 'react'

import { CurrentPath } from './common-components/current-path'
import { Navigation } from './navigation'
import { Routes } from './routes'

const style_wrapper = {outline: 'solid 1px black', padding: '10px', 'marginTop':'5px'}

const App = () => (
  <div style={style_wrapper}>
    <CurrentPath/>
    <Navigation/>
    <Routes />
  </div>
)

export { App }


