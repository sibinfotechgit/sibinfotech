import React from 'react';
import Testimonials from 'react-slick';

export default function SliderTestimonials() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    }
  return (
    <div>
      <Testimonials className="testimonialSlider" {...settings}>
      <div className="itemTestimonial">
        <div className="inneritemTestimonial positive-relative shadow">
            <div className="testimonialItemHeader">
            <h3 className="meduim_heading fontWeight700">Platform Development for Ed-Tech Marketplace</h3>
            </div>
            <p>The platform has just launched. but some of the company's old clients have already expressed their positive feedback on the new website. The company appreciates how the SIB Infotech team showed they cared for the project through their open and honest communication especially when suggesting ideas.</p>
            <div className="testimonialFooter">
            <div className="d-flex flex-wrap justify-content-between">
                <div className="usertestimonial d-flex justify-content-between align-items-center">
                <div className="userIcon me-3">
                    <img src="assets/images/icons/user.png" alt="User Icon"/>
                </div>
                <div className="nameUser">
                    <h4 className="title fontWeight500">Timothy Scafaria</h4>
                    <p>Founder, remoteUprep, LLC</p>
                </div>
                </div>
                <div className="reviewSource mt-2">
                <p className="fontWeight500 text_red text-lg-end text-uppercase">Reviewed From</p>
                <img src="assets/images/clutch-logo.png" alt="Clutch Logo"/>
                </div>
            </div>
            </div>
            <div className="qouteIcon">
            <img src="assets/images/icons/left-quote.png" alt="Quote Icon"/>
            </div>
        </div>
        </div>
        <div className="itemTestimonial">
        <div className="inneritemTestimonial positive-relative shadow">
            <div className="testimonialItemHeader">
            <h3 className="meduim_heading fontWeight700">Website Development Agency Services Mumbai</h3>
            </div>
            <p>SIB Infotech is well managed company who treats each employee very politely. Its great being part of it. Never makes anybody feel burdened and provides friendly atmosphere. Highly professional company to work in. It is one of the best website development company. It is pleasure to work and write content for them.</p>
            <div className="testimonialFooter">
            <div className="d-flex flex-wrap justify-content-between">
                <div className="usertestimonial d-flex justify-content-between align-items-center">
                <div className="userIcon me-3">
                    <img src="assets/images/icons/user.png" alt="User Icon"/>
                </div>
                <div className="nameUser">
                    <h4 className="title fontWeight500">Chetna Goel</h4>
                </div>
                </div>
                <div className="reviewSource mt-2">
                <p className="fontWeight500 text_red text-lg-end text-uppercase">Reviewed From</p>
                <img src="assets/images/google-logo.png" alt="Google Logo"/>
                </div>
            </div>
            </div>
            <div className="qouteIcon">
            <img src="assets/images/icons/left-quote.png" alt="Quote"/>
            </div>
        </div>
        </div>
        <div className="itemTestimonial">
        <div className="inneritemTestimonial positive-relative shadow">
            <div className="testimonialItemHeader">
            <h3 className="meduim_heading fontWeight700">Website Development for Media & Consulting Company</h3>
            </div>
            <p>The client loved the platform that the SIB Infotech team developed for them, especially the calculator function that was included. The company appreciated the team's high level of professionalism, communication, and care on the project. They are happy and willing to work with the team again.</p>
            <div className="testimonialFooter">
            <div className="d-flex flex-wrap justify-content-between">
                <div className="usertestimonial d-flex justify-content-between align-items-center">
                <div className="userIcon me-3">
                    <img src="assets/images/icons/user.png" alt="User Icon"/>
                </div>
                <div className="nameUser">
                    <h4 className="title fontWeight500">Tima Elhajj</h4>
                    <p>CEO & Founder, Tima Media</p>
                </div>
                </div>
                <div className="reviewSource mt-2">
                <p className="fontWeight500 text_red text-lg-end text-uppercase">Reviewed From</p>
                <img src="assets/images/clutch-logo.png" alt="Clutch Logo"/>
                </div>
            </div>
            </div>
            <div className="qouteIcon">
            <img src="assets/images/icons/left-quote.png" alt="Quote"/>
            </div>
        </div>
        </div>
      </Testimonials>
    </div>
  )
}
