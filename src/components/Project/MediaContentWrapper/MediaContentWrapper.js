import React from 'react';
import ImageContainer from '../../Project/ImageContainer/ImageContainer'
import VideoContainer from '../VideoContainer/VideoContainer'
import './MediaContentWrapper.css'

const MediaContentWrapper = (props) => {
  let media = props.media
  const renderContent = () => {
    
    if (media.type === 'image') {
      let image = {
        ...media,
        className: 'carousel-image'
      }
      return (
        <div className="media-content-wrapper-block">
          <ImageContainer image={image}></ImageContainer>
          <p className="media-content-caption">{media.caption}</p>
        </div>
      )
    } else {
      let video = {
        link: media.link,
        className: 'carousel-image'
      }
      return (
        <div className="media-content-wrapper-block">
          <VideoContainer media={video}></VideoContainer>
          <p className="media-content-caption">{media.caption}</p>
        </div>
      )
    }
  }
  return (
    renderContent()
  )
}

export default MediaContentWrapper;