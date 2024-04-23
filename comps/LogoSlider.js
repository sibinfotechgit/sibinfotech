import React from 'react'
import LogoSliders from 'react-slick';

export default function LogoSlider() {
    var sliderSettings ={
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 5000,
        pauseOnHover: false,
        cssEase: 'linear',
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false,
                arrows:false
            }
            }
        ]
    }
  return (
    <div>
      <LogoSliders className="logoSlider" {...sliderSettings}>
        <div className="itemSlider shadow">
            <img src="assets/images/clients/3solutions.svg" alt="3solutions"/>
        </div>
        <div className="itemSlider shadow">
            <img src="assets/images/clients/amisuzi.svg" alt="Amisuzi"/>
        </div>
        <div className="itemSlider shadow">
            <img src="assets/images/clients/axis-y.svg" alt="Axis Y"/>
        </div>
         <div className="itemSlider shadow">
            <img src="assets/images/clients/clients-anybody-can-help-website.svg" alt="Anybody can help"/>
        </div>
        <div className="itemSlider shadow">
            <img src="assets/images/clients/clients-athena-website.svg" alt="Athena"/>
        </div>
        <div className="itemSlider shadow">
            <img src="assets/images/clients/clients-bharat-petroleum-website.svg" alt="Bharat Petroleum"/>
        </div>
        <div className="itemSlider shadow">
            <img src="assets/images/clients/clients-elder-website.svg" alt="Elder"/>
        </div>
        <div className="itemSlider shadow">
        <img src="assets/images/clients/clients-finolex-website.svg" alt="Finolex"/>
            </div>
        <div className="itemSlider shadow">
        <img src="assets/images/clients/clients-hindustan-petroleum-website.svg" alt="Hindustan Petroleum"/>
            </div>
        <div className="itemSlider shadow">
            <img src="assets/images/clients/clients-hindustan-times-website.svg" alt="Hindustan Times"/>
        </div>
        <div className="itemSlider shadow">
            <img src="assets/images/clients/clients-infertility-search-website.svg" alt="Infertility Search"/>
        </div>
        <div className="itemSlider shadow">
            <img src="assets/images/clients/clients-mangorange-productions-website.svg" alt="Mangorange Productions"/>
        </div>
        <div className="itemSlider shadow">
            <img src="assets/images/clients/clients-msg-website.svg" alt="MSG"/>
        </div>
        <div className="itemSlider shadow">
            <img src="assets/images/clients/clients-narain-website-logo.svg" alt="Narain"/>
        </div>
        <div className="itemSlider shadow">
            <img src="assets/images/clients/clients-nets-n-screens-website.svg" alt="Nets-n-screen"/>
        </div>
        <div className="itemSlider shadow">
            <img src="assets/images/clients/clients-nsa-architects-website.svg" alt="NSA Architects"/>
        </div>
        <div className="itemSlider shadow">
            <img src="assets/images/clients/clients-pravaasah-holiday-website.svg" alt="Pravash Holiday"/>
        </div>
        <div className="itemSlider shadow">
            <img src="assets/images/clients/clients-red-cart-films-website.png" alt="Red Cart Films"/>
        </div>
        <div className="itemSlider shadow">
            <img src="assets/images/clients/clients-tripplanners-world-website.svg" alt="Tripplanners"/>
        </div>
        <div className="itemSlider shadow">
            <img src="assets/images/clients/competekaro.svg" alt="Competekaro"/>
        </div>
        <div className="itemSlider shadow">
            <img src="assets/images/clients/dudley.svg" alt="Dudley"/>
        </div>
      </LogoSliders>
    </div>
  )
}
