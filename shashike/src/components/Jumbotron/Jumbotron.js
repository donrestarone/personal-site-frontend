import React from 'react';

const Jumbotron = (props) => {
  console.log(props.exit)
  return (
    <div class={`jumbotron jumbotron-fluid animated ${props.exit}`}>
      <div class="container">
        <h1 class="display-2">I am</h1>
        <p className={`display-4 animated ${props.style}`}>{props.word}</p>
      </div>
    </div>
  )
}

export default Jumbotron;