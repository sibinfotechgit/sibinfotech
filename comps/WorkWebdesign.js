import React from 'react';
import WorkSlider from "react-slick";
import LogoSlider from './LogoSlider';

export default function WorkWebdesign() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <div className="circleIcon">
        <img src="assets/images/icons/circle.svg" alt="Circle Icon"/>
      </div>
      <div className="containerFull">
        <h3 className="text-center centerTitle heading fontHeading fontWeight600">Made by <span>SIB Infotech</span></h3>
        <div className="space"></div>
        <div className="portfolioHome">
          <h3 className="sub_heading fontWeight600">Our Portfolio</h3>
          <p className="title mt-2">Website Design you'll want to tell all your friends about</p>
        </div>
        <WorkSlider className="workSlider" {...settings}>
          <div className="innerSlider">
              <div className="itemSliderWork">
                <div className="row">
                  <div className="col-lg-6">
                      <div className="imgWork">
                        <img src="assets/images/works/omee.png" alt="OMEE - Alkem Generic"/>
                      </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="workHomeRight">
                      <h3 className="text_dark_blue fontWeight700">OMEE - Alkem Generic</h3>
                      <p className="mt-3">Omee is India’s favourite antacid and an iconic brand by Alkem Generic. The unique formulation of Omee dissolves quickly and neutralizes stomach acid to provide effective relief from acidity and gas.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="innerSlider">
              <div className="itemSliderWork">
                <div className="row">
                  <div className="col-lg-6">
                      <div className="imgWork">
                      <picture>
                        <source srcSet="assets/images/works/roswalt.webp" type="image/webp"/>
                        <img src="assets/images/works/roswalt.png" alt="Roswalt - Roswalt Realty: Residential commercial Projects Mumbai"/>
                      </picture>
                      </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="workHomeRight">
                      <h3 className="meduim_heading text_dark_blue fontWeight700">Roswalt Realty</h3>
                      <p className="mt-3">Roswalt realty believes in creating spaces that are an extension of one’s self and this philosophy is infused in every project undertaken by us. The company boasts of a proud lineage and finds its roots in the prestigious red brick group known for providing...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="innerSlider">
              <div className="itemSliderWork">
                <div className="row">
                  <div className="col-lg-6">
                      <div className="imgWork">
                      <picture>
                        <source srcSet="assets/images/works/netsys.webp" type="image/webp"/>
                        <img src="assets/images/works/netsys.png" alt="Online Netsys"/>
                      </picture>
                      </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="workHomeRight">
                      <h3 className="meduim_heading text_dark_blue fontWeight700">Online Netsys</h3>
                      <p className="mt-3">OnLine Netsys is inspired by the objective of empowering enterprises with leading global IT Infrastructure, Networking and AV Technology.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="innerSlider">
              <div className="itemSliderWork">
                <div className="row">
                  <div className="col-lg-6">
                      <div className="imgWork">
                      <picture>
                        <source srcSet="assets/images/works/shaurya.webp" type="image/webp"/>
                        <img src="assets/images/works/shaurya.png" alt="Shaurya Dedhia"/>
                      </picture>
                      </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="workHomeRight">
                      <h3 className="meduim_heading text_dark_blue fontWeight700">Shaurya Dedhia</h3>
                      <p className="mt-3">Shaurya Dedhia - The studio practices architecture, interior and product designing, specializing in bespoke, end-to-end design solutions.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="innerSlider">
              <div className="itemSliderWork">
                <div className="row">
                  <div className="col-lg-6">
                      <div className="imgWork">
                      <picture>
                        <source srcSet="assets/images/works/alarm-avenue.webp" type="image/webp"/>
                        <img src="assets/images/works/alarm-avenue.png" alt="Alar Avenue"/>
                      </picture>
                      </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="workHomeRight">
                      <h3 className="meduim_heading text_dark_blue fontWeight700">Alarm Avenue</h3>
                      <p className="mt-3">Alarm Avenue is a team of highly trained Technicians and Installers. We are specialized in Commercial & Home Security. We are fully licensed, insured, and covered by WorkSafe BC.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </WorkSlider>
        <div className="bottomTextSlider">
          <h4 className="small_heading fontWeight600">Some of the <span className="text_red">Best Companies in India</span> & Worldover, We’re working with</h4>
        </div>
        <div className="logoMarqueeHome">
          <LogoSlider/>
        </div>
      </div>
      </div>
  )
}
