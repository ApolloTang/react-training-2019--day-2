import React from 'react'
import { NavLink } from 'react-router-dom'

const style_wrapper = {outline: 'solid 1px black', padding: '10px', 'marginTop':'5px'}
const style_active = {color: 'red'}

const Navigation = () => (
  <div style={style_wrapper}>
    <ul>
      <li><NavLink exact activeStyle={style_active} to="/"             >Link to: /      </NavLink></li>
      <li><NavLink exact activeStyle={style_active} to="/a"            >Link to: /page a</NavLink></li>
      <li><NavLink exact activeStyle={style_active} to="/b"            >Link to: /page b</NavLink></li>
      <li><NavLink exact activeStyle={style_active} to="/does-not-exit">Link to: /does-not-exist</NavLink></li>
    </ul>
  </div>
)

export {Navigation}


