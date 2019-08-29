import React from 'react';

const Aux = (props) => {

  const renderView = () => {
    if (props.isMobile) {
      return (
        <div>
          {props.children}          
        </div>
      )
    } else {
      return props.children
    }
  }
  return (
    renderView()
  )
}

export default Aux;