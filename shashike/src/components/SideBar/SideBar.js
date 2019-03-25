import React, { Component } from 'react';
import SideBarList from './SideBarList'

class SideBar extends Component {
  state = {
    showSideBar: false
  }

  renderSideBar = () => {
    let showSideBar = this.state.showSideBar
    if (showSideBar) {
      return (
        <SideBarList></SideBarList>
      )
    }
  }

  expansionHandler = () => {
    this.setState(prevState => ({
      showSideBar: !prevState.showSideBar
    }))
  }
  render() {

    return (
    <div className="align-middle">
      <button onClick={this.expansionHandler} >&#10095;</button>
      {this.renderSideBar()}
    </div>
    
    );
  }
}

export default SideBar;