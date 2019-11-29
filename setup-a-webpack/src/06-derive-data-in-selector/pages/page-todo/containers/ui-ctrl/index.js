import React from 'react'
import { connect } from 'react-redux'
import { mapAppStateToProps, mapDispatchToProps } from './selector'



const FilterButton = ({filterType, onClick, currentFilterType}) => {
  const isActive = filterType === currentFilterType

  const styleContainer = {paddingRight: '5px'}
  const styleDefault = {paddingRight: '5px'}
  const styleButton = (isActive) ? {...styleDefault, color:'red'} : styleDefault

  const handle_buttonClick = e => {
    e.preventDefault()
    onClick(filterType)
  }

  return (
    <div style={styleContainer}>
      <a
        data-testid={`ctrl-${filterType}`}
        href="#"
        style={styleButton}
        onClick={handle_buttonClick} >
        {filterType}
      </a>
    </div>
  )
}



const TodoListUiCtrl = ({
  dispatch_setFilterType,
  currentFilterType
}) => {
  const styleCtrl = {display:'flex', padding:'5px' }

  const handle_filterChanged = filterType =>{
    dispatch_setFilterType(filterType)
  }

  return (
    <div style={styleCtrl}>
      <FilterButton filterType='all'       onClick={handle_filterChanged} currentFilterType={currentFilterType} />
      <FilterButton filterType='active'    onClick={handle_filterChanged} currentFilterType={currentFilterType} />
      <FilterButton filterType='completed' onClick={handle_filterChanged} currentFilterType={currentFilterType} />
    </div>
  )
}


const Control = connect(
  mapAppStateToProps,
  mapDispatchToProps
)(TodoListUiCtrl)


export {
 Control
}
