import React from 'react';
import './Jumbotron.css'

const Jumbotron = (props) => {
  return (
    <div className={`jumbo-wrapper ${props.exit}`}>
      <div>
        <h1 className="jumbo-heading">I am</h1>
        <p className={`jumbo-text ${props.style}`}>{props.word}</p>
      </div>
    </div>
  )
}

export default Jumbotron;