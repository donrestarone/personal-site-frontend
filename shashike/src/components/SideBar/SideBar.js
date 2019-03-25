import React, { Component } from 'react';

class SideBar extends Component {
  state = {
    showSideBar: false
  }

  renderSideBar = () => {
    let showSideBar = this.state.showSideBar
    if (showSideBar) {
      return (
        <div class="list-group list-group-flush">
          <a href="#" class="list-group-item list-group-item-action bg-light">Dashboard</a>
          <a href="#" class="list-group-item list-group-item-action bg-light">Shortcuts</a>
          <a href="#" class="list-group-item list-group-item-action bg-light">Overview</a>
          <a href="#" class="list-group-item list-group-item-action bg-light">Events</a>
          <a href="#" class="list-group-item list-group-item-action bg-light">Profile</a>
          <a href="#" class="list-group-item list-group-item-action bg-light">Status</a>
        </div>
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
    <div>
      <button onClick={this.expansionHandler}>&#10095;</button>
      {this.renderSideBar()}
    </div>
    
    );
  }
}

export default SideBar;