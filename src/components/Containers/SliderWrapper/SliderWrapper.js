import React from 'react';
import './SliderWrapper.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SliderWrapper = props => {
  return (
    <Slider {...props.settings}>
      {props.children}
    </Slider>
  );
}

export default SliderWrapper;