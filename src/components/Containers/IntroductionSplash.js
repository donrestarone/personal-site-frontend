import React, { Component } from 'react';
import Jumbotron from '../Jumbotron/Jumbotron'
import {characteristics, styles} from '../../Constants/JumbotronData'
let timer 
class IntroductionSplash extends Component {
  state = {
    currentWord: [],
    style: null,
    exitAnimation: null
  }

  wordArrayIterator = () => {
    let  i = 0
    timer = setInterval(() => {
      this.setState({currentWord: characteristics[i], style: styles[i]}, () => {
        i++
      })
      if (i === characteristics.length) {
        clearInterval(timer)
        // set the delay for adding the css class that renders the exit transition
        this.renderExitTransition()
      }
      // set how quickly the words change
    }, 750)
  }

  renderExitTransition = () => {
    setTimeout(() => {
      this.setState({exitAnimation: "fadeOut"})
    }, 500);
  }
  componentDidMount = () => {
    this.wordArrayIterator()
  }

  componentWillUnmount = () => {
    clearTimeout(timer)
  }

  render() {
    let word = this.state.currentWord
    let style = this.state.style
    let exit = this.state.exitAnimation
    return (
    <div className="text-center">
      <Jumbotron word={word} style={style} exit={exit}></Jumbotron>
    </div>
    
    );
  }
}

export default IntroductionSplash;