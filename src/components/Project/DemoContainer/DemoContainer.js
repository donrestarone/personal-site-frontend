import React from 'react';
import './DemoContainer.css'
import ImageContainer from '../../Project/ImageContainer/ImageContainer'
import arrow from '../../../assets/back-button.png'
import VideoContainer from '../VideoContainer/VideoContainer'

const DemoContainer = (props) => {
  const renderContent = () => {
    if (props.media) {
      let media = props.media[props.index]
      if (media.type === 'image') {
        let image = {
          ...media,
          className: 'demo-image'
        }
        return <ImageContainer image={image}></ImageContainer>
      } else {
        let video = {
          link: media.link,
          className: 'demo-image'
        }
        return <VideoContainer media={video}></VideoContainer>
      }
    }
  }
  return (
    <div className="demo-container-wrapper">
      <h1 className="demo-heading">Demo</h1>
      <div className="demo-content-wrapper">
        <img onClick={props.previous} src={arrow} className="demo-container-controls left-arrow"></img>
        {renderContent()}
        <img onClick={props.next} src={arrow} className="demo-container-controls right-arrow"></img>
      </div>
    </div>
  )
}

export default DemoContainer;