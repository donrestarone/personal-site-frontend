import React from 'react';
import './DemoContainer.css'
import SliderWrapper from '../../Containers/SliderWrapper/SliderWrapper'
import MediaContentWrapper from '../MediaContentWrapper/MediaContentWrapper'

const DemoContainer = (props) => {
  let mediaContent = props.media ? props.media : null
  const renderContent = () => {
    if (mediaContent) {
      return (
      <SliderWrapper
        settings={
          {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: false,
            variableWidth: false, 
            centerMode: true
          }
        }
      >
        {renderMediaContent(mediaContent)}
      </SliderWrapper>
      )
    }
  }

  const renderMediaContent = (mediaContent) => {
    return mediaContent.map((media, i) => {
      return <MediaContentWrapper media={media}></MediaContentWrapper>
    })
  }
  return (
    <div className="demo-container-wrapper">
      <h1 className="demo-heading">Demo</h1>
      {renderContent()}
    </div>
  )
}

export default DemoContainer;