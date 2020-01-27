import React, { Component } from 'react';
import './Demo.css'
import Spinner from '../../Spinner/Spinner'

class Demo extends Component {
  state = {
    media: []
  }

  componentDidMount = () => {
    this.detectMediaObjects()
  }

  detectMediaObjects = () => {
    let media = this.props.project.media.map((object, index) => {
      return {
        loaded: false,
        ...object,
      }
    })
    // this function will set the state to the amount of media objects that need to be loaded
    this.setState({media: media})
  }

  handleLoad = (link) => {
    let media = JSON.parse(JSON.stringify(this.state.media))
    media.forEach((object, index) => {
      if (object.link === link) {
        object.loaded = true
        media.splice(index, 1, object)
      }
    })    
    this.setState({
      media
    })
  }

  showDemoContext = () => {
    let media = this.state.media
    if (media) {
      return media.map((asset, index) => {
        if (asset.type === 'video') {
          return (
            <div className="video-demo">
              <video className="video-column" src={asset.link} autoPlay muted="" playsinline="" controls loop/>
              <p>{asset.caption}</p>
            </div>
          )
        } else {
          let loadedStyle = {
            display: asset.loaded ? 'block' : 'none'
          }
          let loadingStyle = {
            display: !asset.loaded ? 'block' : 'none'
          }
          return (
            <>
              <Spinner loadingStyle={loadingStyle}></Spinner>
              <div className="picture-demo" style={loadedStyle}>
                <img className="picture-column" onLoad={ () => { this.handleLoad(asset.link) } } src={asset.link}></img>
                <p>{asset.caption}</p>
              </div>
            </>
          )
        }
      })
    }
  }

  render() {
    return (
    <div>
      {this.showDemoContext()}
    </div>
    
    );
  }
}

export default Demo;