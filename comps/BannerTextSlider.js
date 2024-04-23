import React from 'react';
import SliderText from "react-slick";

export default function BannerTextSlider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        vertical: true,
        verticalScrolling: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <div>
       <SliderText className="vertcalSlider" {...settings}>
       <div className="itemTextSlider">
            <h3 className="title">Leads</h3>
        </div>
        <div className="itemTextSlider">
            <h3 className="title">Brand Awareness</h3>
        </div>
        <div className="itemTextSlider">
            <h3 className="title">Through our Digital Marketing Services</h3>
        </div>
       </SliderText>
    </div>
  )
}
