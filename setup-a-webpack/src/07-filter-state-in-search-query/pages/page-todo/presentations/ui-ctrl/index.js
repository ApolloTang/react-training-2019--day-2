import React from 'react'
import { NavLink } from 'react-router-dom'


const FilterButton = ({filterType, currentFilterType}) => {
  const isActive = filterType === currentFilterType

  const styleContainer = {paddingRight: '5px'}
  const styleDefault = {paddingRight: '5px'}
  const styleButton = (isActive) ? {...styleDefault, color:'red'} : styleDefault

  return (
    <div style={styleContainer}>
      <NavLink
        to={`?filterType=${filterType}`}
        style={styleButton}
        data-testid={`ctrl-${filterType}`}>
        {filterType}</NavLink>
    </div>
  )
}


const TodoListUiCtrl = ({currentFilterType}) => {
  const styleCtrl = {display:'flex', padding:'5px' }
  return (
    <div style={styleCtrl}>
      <FilterButton currentFilterType={currentFilterType} filterType='all' />
      <FilterButton currentFilterType={currentFilterType} filterType='active' />
      <FilterButton currentFilterType={currentFilterType} filterType='completed' />
    </div>
  )
}


const Control = TodoListUiCtrl


export {
 Control
}
