import Head from 'next/head';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';

import BannerForm from '../comps/BannerForm';
import BannerTextSlider from '../comps/BannerTextSlider';
import BlogCard from '../comps/BlogCard';
import DigitalMarketingTab from "../comps/DigitalMarketingTab";
import Faqs from '../comps/Faqs';
import SliderTestimonials from '../comps/SliderTestimonials';
import WorkWebdesign from '../comps/WorkWebdesign';

import * as CONSTANTS from "../constants/constants";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CountUp from 'react-countup';

import axios from "axios";

const headers = {
  'Content-Type': 'multipart/form-data',
  'Authorization': CONSTANTS.API_TOKEN
}

export const getStaticProps = async () => {
    const res = await axios.get(`${CONSTANTS.API_URL}blog/all?publish=1&limit=6`, {
      headers: headers
    }).catch((err) => console.log(err));
    const data = await res.data;

    return {
      props: { blogs: data.blogs }
    }
}

export default function Home({ blogs }) {

  return (
    <div>
      <Head>
        <title>Website Designing, Development & Digital Marketing SEO Company Agency in Mumbai India</title>
        <meta name="keywords" content="best website designing company in Mumbai, website designing in Mumbai, web designing company in Mumbai, re-website designing agency in Mumbai, web design Mumbai, website designing company in Mumbai, website designing services in Mumbai, Website Designing "/>
        <meta name="description" content="SIB is Google Partner Agency & Top Company in Mumbai for Digital Marketing, Website Designing, Mobile App Development, SEO, Google AdWords PPC Management, Web Development, Custom CRM & ERP, E-Commerce Design, Website Redesign services & a complete web solution firm in Navi Mumbai, Thane, Pune, Delhi NCR, Noida, Gurgaon, India"/>
        <meta property="og:title" content="Best Website Designing Development & Digital Marketing SEO Company in Mumbai, Delhi, India"/>
        <meta property="og:description" content="SIB Infotech is a leading website designing and development and digital marketing company in Mumbai, Delhi, India offers complete end to end web solutions for designing development and digital marketing services that will help to improve user experience."/>
        <meta property="og:image" content="https://www.sibinfotech.com/assets/images/logo.webp"/>
        <meta property="og:url" content="https://www.sibinfotech.com"/>
        <meta name="twitter:title" content="Best Website Designing Development & Digital Marketing SEO Company in Mumbai, Delhi, India"/>
        <meta name="twitter:description" content="SIB Infotech is a leading website designing and development and digital marketing company in Mumbai, Delhi, India offers complete end to end web solutions for designing development and digital marketing services that will help to improve user experience."/>
        <meta name="twitter:image" content="https://www.sibinfotech.com/assets/images/logo.webp"/>
        <meta name="twitter:url" content=" https://www.sibinfotech.com" />
        <link rel="canonical" href="https://www.sibinfotech.com/" />
      </Head>
      <div className="bannerBlock">
        <video loop playsInline autoPlay muted>
            <source src="assets/images/banner/banner-video.mp4" type="video/mp4" />
        </video>
        <div className="videoText">
            <div className="containerFull">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="videoLeft">
                            <h1 className="large_heading fontWeight800 text-white">TOP RATED</h1>
                            <h2 className="heading fontWeight700 my-2">WEB DESIGN AND <span>DIGITAL MARKETING AGENCY</span></h2>
                            <h3 className="sub_heading text-white">We Help you get</h3>
                            <div className="centerVideo">
                              <BannerTextSlider/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 d-none d-md-block">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Digital Marketing</span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className="col-lg-5 d-block d-md-none">
          <div className="bannerForm">
              <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
              <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Digital Marketing</span> Company in India</strong></p>
              <BannerForm/>
          </div>
      </div>
      <div className="bannerBottomLogo">
        <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="inlineClutch">
              <div className="itemReviews">
                <img src="assets/images/best-website-deigning-ana-development-company-in-india.svg" alt="Best website desining and development company in India"/>
              </div>
              <div className="itemReviews">
                <img src="assets/images/best-design-comapnies-in-india.svg" alt="Best Designing Company in India"/>
              </div>
              <div className="itemReviews">
                <img src="assets/images/facebook-reviews.svg" alt="Facebook Reviews"/>
              </div>
              <div className="itemReviews">
                <img src="assets/images/search-engine-optimization-firm-in-delhi.svg" alt="Search engine optimization firm in delhi"/>
              </div>
              <div className="itemReviews">
                <img src="assets/images/top-advertising-and-marketing-company.png" alt="Top adverstising and marketing company"/>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="tagLine">
            <h4 className="small_heading fontWeight500">An Award Winning <span className="text_red">Best Website Design &amp; Digital Growth Agency</span> in India that Designs, Develops &amp; Delivers</h4>
          </div>
          </div>
        </div>
        </div>
      </div>
      <section className="counter">
        <div className="containerFull">
          <div className="row">
            <div className="col-lg-7 pe-lg-4">
              <div className="drivenLeft">
                <h5 className="title">DIGITAL MARKETING & WEB AGENCY MUMBAI, DELHI</h5>
                <h4 className="sub_heading fontWeight700 mt-3">We are as <span className="titleHighlight">STRONG</span> as YOU <br/>Make us</h4>
                <p className="mt-3 title">Among Best Website Designing, Web Development & Digital marketing Company in India Since 2005</p>
                <div className="row mt-4">
                  <div className="col-lg-3 col-6 px-2">
                    <div className="itemCounter shadow">
                      <h4 className="fontNumber"><span className="counter-value"><CountUp end={18} />+</span></h4>
                      <p className="title fontWeight500 mt-2">Years in Business</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-6 px-2">
                    <div className="itemCounter shadow">
                      <h4 className="fontNumber"><span className="counter-value"><CountUp end={1350} /></span>+</h4>
                      <p className="title fontWeight500 mt-2">Projects delivered</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-6 px-2">
                    <div className="itemCounter shadow">
                      <h4 className="fontNumber"><span className="counter-value"><CountUp end={750} /></span>+</h4>
                      <p className="title fontWeight500 mt-2">Active clients/users</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-6 px-2">
                    <div className="itemCounter shadow">
                      <h4 className="fontNumber"><span className="counter-value"><CountUp end={30} /></span>+</h4>
                      <p className="title fontWeight500 mt-2">Team Members</p>
                    </div>
                  </div>
                </div>
                <ul>
                  <li><Link href="/digital-marketing-services"><a>Digital Marketing</a></Link></li>
                  <li><Link href="/pay-per-click-ppc-management-services"><a>PPC Management</a></Link></li>
                  <li><Link href="/search-engine-optimization-seo-services"><a>Search Engine Optimization</a></Link></li>
                  <li><Link href="/social-media-marketing-services"><a>Social Media Marketing</a></Link></li>
                  <li><Link href="/social-media-optimization-services"><a>Social Media Optimization</a></Link></li>
                  <li><Link href="/influencer-marketing-services"><a>Influencer Marketing</a></Link></li>
                </ul>
              </div>
            </div>
              <div className="col-lg-5">
                <div className="rightServices">
                  <h4 className="sub_heading text-center fontWeight700">Website design and development getting real results</h4>
                  <p className="title mt-4 text-center">If you’re serious about business and want to see real returns from your website and digital marketing initiatives, talk to us. All digital marketing is 100% measurable, we know we get results.</p>
                </div>
              </div>
          </div>
        </div>
      </section>
      <section className="bgGrey overflowHidden position-relative">
        <WorkWebdesign/>
      </section>
      <section>
        <div className="containerFull">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <h4 className="heading text-center fontWeight700">Areas of Expertise</h4>
              <h5 className="small_heading mt-3 text-center fontWeight500">#1 Affordable <span className="text_red">Digital Marketing Agency In India</span> - An Extended Team</h5>
              <p className="text-center mt-3">SIB Infotech is a professionally managed full service web design &amp; development company in mumbai, india. Since 2005 we have been helping business in India, UK, Canada, Australia and world over to adapt and grow in an ever changing inline world by offering fully functional mobile friendly responsive, cheap Website Designing, Web Development</p>
            </div>
          </div>
          <div className="space"></div>
          <div className="servicesWeb">
            <div className="inlineService">
              <div className="itemServiceLine" data-background="url(assets/images/bg/web-design.jpg)">
                <h4 className="meduim_heading">Website Designing</h4>
                <div className="serviceText">
                  <p>Your website is your home on the internet (web). The Website Design is the first and the foremost area which must be concentrated as it is the virtual face of a company.</p>
                </div>
                <Link href="/website-designing-services"><a className="linkService">Read More</a></Link>
              </div>
              <div className="itemServiceLine"  data-background="url(assets/images/bg/seo.jpg)">
                <h4 className="meduim_heading">Search Engine Optimization</h4>
                <div className="serviceText">
                  <p>Search Engine Optimization is the most efficient and effective method increase your search engine visibility and drive traffic to your website. With our SEO services in India .</p>
                </div>
                <Link href="/search-engine-optimization-seo-services"><a className="linkService">Read More</a></Link>
              </div>
              <div className="itemServiceLine"  data-background="url(assets/images/bg/offshore.jpg)">
                <h4 className="meduim_heading">Offshore Outsourcing</h4>
                <div className="serviceText">
                  <p>Sit back relax! Hire top notch thinkers, web developers, web designers, and search engineers and quickly scale your delivery capacity. We are a global offshore outsourcing...</p>
                </div>
                <Link href="/search-engine-optimization-outsourcing-seo-services"><a className="linkService">Read More</a></Link>
              </div>
              <div className="itemServiceLine borderTop"  data-background="url(assets/images/bg/web-development.jpg)">
                <h4 className="meduim_heading">Website Development</h4>
                <div className="serviceText">
                  <p>We offer customized web development services using latest frameworks and platforms to build bespoke web applications for websites or Mobile Apps, E-commerce Portals, API links and much more</p>
                </div>
                <Link href="/website-development-services"><a className="linkService">Read More</a></Link>
              </div>
              <div className="itemServiceLine borderTop"  data-background="url(assets/images/bg/mobile-app.jpg)">
                <h4 className="meduim_heading">Mobile App Development</h4>
                <div className="serviceText">
                  <p>In a quest for staying ahead of the technology it is a necessity for any business looking to leverage the power of smartphones to develop mobile apps. Being an experienced...</p>
                </div>
                <Link href="/mobile-application-development-services"><a className="linkService">Read More</a></Link>
              </div>
              <div className="itemServiceLine borderTop"  data-background="url(assets/images/bg/software-development.jpg)">
                <h4 className="meduim_heading">Software Development</h4>
                <div className="serviceText">
                  <p>We build custom software solutions that will help your business optimise operations, unlock a new level of efficiency and transform your ideas into an innovative service or anengaging...</p>
                </div>
                <Link href="/software-development-services"><a className="linkService">Read More</a></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contentTab">
        <div className="containerFull">
          <div className="row align-items-center">
            <div className="col-lg-9">
              <div className="titleLeft">
                <h5 className="heading fontWeight700"><span className="titleHighlight">Digital Marketing</span> Services</h5>
                <p className="mt-4">We understand that no two businesses can be the same and so is there website usage and therefore they will need a different CMS solution. We do Your business in your way.</p>
              </div>
            </div>
            <div className="col-lg-3 text-end">
              <div className="buttonRight">
                <Link href="/contact-us"><a className="btnThemeRed">Get a Quote</a></Link>
              </div>
            </div>
          </div>
          <hr/>
          <div className="space"></div>
            <DigitalMarketingTab/>
        </div>
      </section>
      <section className="bg1">
        <div className="containerFull">
            <div className="aboutCenter">
                <h3 className="heading fontHeading fontWeight600 text-center">About Us</h3>
                <h4 className="bgTitle">ABOUT Us</h4>
            </div>
            <div className="space"></div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="aboutLeftHome">
                        <h3 className="sub_heading fontWeight600 text_light_blue">What We Do Is</h3>
                        <p className="mt-3">SIB Infotech is a professionally managed full service web design & development company in mumbai, india. Since 2005 we have been helping business in India, UK, Canada, Australia and worldwide.</p>
                        <div className="leftAboutHomeItem mt-lg-4 mt-3">
                            <div className="iconLeft">
                                <img className="default" src="assets/images/icons/seo.png" alt="icon"/>
                                <img className="blue" src="assets/images/icons/seo-blue.png" alt="icon"/>
                            </div>
                            <div className="iconRightAbout">
                                <h3 className="small_heading fontWeight600">Digital Marketing Services</h3>
                                <p className="mt-2">We build custom software solutions that will help your business optimise operations,</p>
                            </div>
                        </div>
                        <div className="leftAboutHomeItem mt-3">
                            <div className="iconLeft">
                                <img className="default" src="assets/images/icons/web-programming.png" alt="icon"/>
                                <img className="blue" src="assets/images/icons/web-programming-blue.png" alt="icon"/>
                            </div>
                            <div className="iconRightAbout">
                                <h3 className="small_heading fontWeight600">Web Designing Services</h3>
                                <p className="mt-2">We build custom software solutions that will help your business optimise operations,</p>
                            </div>
                        </div>
                        <div className="leftAboutHomeItem mt-3">
                            <div className="iconLeft">
                                <img className="default" src="assets/images/icons/coding.png" alt="icon"/>
                                <img className="blue" src="assets/images/icons/coding-blue.png" alt="icon"/>
                            </div>
                            <div className="iconRightAbout">
                                <h3 className="small_heading fontWeight600">Web Development Services</h3>
                                <p className="mt-2">We build custom software solutions that will help your business optimise operations,</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="aboutHomeRight">
                      <picture>
                        <source srcSet="assets/images/about2.webp" type="image/webp"/>
                        <img src="assets/images/about2.png" alt="SIB Infotech about us"/>
                      </picture>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <section className="marBlock overflowHidden">
        <div className="marqBlock">
          <h2 className="large_heading maqrquee fw-bold text-uppercase"><span className="stroke">DIGITAL MARKETING</span> & WEB AGENCY</h2>
          <h2 className="large_heading mt-4 maqrqueeReverse fw-bold text-uppercase">DIGITAL MARKETING & <span  className="stroke">WEB AGENCY</span></h2>
        </div>
        <div className="containerFull">
          <div className="technicalExpertise">
            <div className="itemTechnicalExpertise">
              <img src="assets/images/php.png" alt="PHP"/>
              <h4 className="small_heading">PHP</h4>
            </div>
            <div className="itemTechnicalExpertise">
              <img src="assets/images/wordpress-logo.png" alt="WordPress"/>
              <h4 className="small_heading">WordPress</h4>
            </div>
            <div className="itemTechnicalExpertise">
              <img src="assets/images/asp.png" alt="ASP.net"/>
              <h4 className="small_heading">ASP .net</h4>
            </div>
            <div className="itemTechnicalExpertise">
              <img src="assets/images/mysql.png" alt="MySQL"/>
              <h4 className="small_heading">MySQL</h4>
            </div>
            <div className="itemTechnicalExpertise">
              <img src="assets/images/html-5.png" alt="HTML"/>
              <h4 className="small_heading">HTML</h4>
            </div>
            <div className="itemTechnicalExpertise">
              <img src="assets/images/drupal.png" alt="Drupal"/>
              <h4 className="small_heading">Drupal</h4>
            </div>
            <div className="itemTechnicalExpertise">
              <img src="assets/images/js.png" alt="JavaScript"/>
              <h4 className="small_heading">JavaScript</h4>
            </div>
            <div className="itemTechnicalExpertise">
              <img src="assets/images/ci.png" alt="Codeigniter"/>
              <h4 className="small_heading">Codeigniter</h4>
            </div>
            <div className="itemTechnicalExpertise">
              <img src="assets/images/laravel.png" alt="Laravel"/>
              <h4 className="small_heading">Laravel</h4>
            </div>
            <div className="itemTechnicalExpertise">
              <img src="assets/images/magento.png" alt="Magento"/>
              <h4 className="small_heading">Magento</h4>
            </div>
            <div className="itemTechnicalExpertise">
              <img src="assets/images/angular.png" alt="Angular"/>
              <h4 className="small_heading">Angular</h4>
            </div>
            <div className="itemTechnicalExpertise">
              <img src="assets/images/css-3.png" alt="CSS"/>
              <h4 className="small_heading">CSS</h4>
            </div>
            <div className="itemTechnicalExpertise">
              <img src="assets/images/photoshop.png" alt="Photoshop"/>
              <h4 className="small_heading">Photoshop</h4>
            </div>
            <div className="itemTechnicalExpertise">
              <img src="assets/images/illustrator.png" alt="Illustrator"/>
              <h4 className="small_heading">Illustrator</h4>
            </div>
            <div className="itemTechnicalExpertise">
              <img src="assets/images/figma.png" alt="Figma"/>
              <h4 className="small_heading">Figma</h4>
            </div>
            <div className="itemTechnicalExpertise">
              <img src="assets/images/bootstrap.png" alt="Bootstrap"/>
              <h4 className="small_heading">Bootstrap</h4>
            </div>
          </div>
        </div>
      </section>
      <section className="lightBg dots curve1">
        <div className="containerFull">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <h4 className="heading text-center fontWeight700">#1 Affordable <span className="text_light_blue fontWeight900">Digital Marketing Agency in India</span> - An Extended Team</h4>
            </div>
          </div>
          <div className="space"></div>
          <div className="freeText">
            <p className="title">We are a young creative web development and digital marketing agency for any business - anywhere to promote their business online and engage users with brands and convert them to customers and experience an overall improvement in client base.</p>

            <p className="title">In comparison to other SEO companies in India, we are not only an affordable SEO Agency, we are a results-focused and driven company, So if you're looking for a great looking website and a team that can follow through by delivering top rankings and brining in tremendous traffic to your website, you've found the right organization.</p>

            <p className="title">We help you drive your digital strategies & meet your business objectives in the way you want to promote your website on web with our creative and innovative ideas. We ensure that our affordable seo packages help your website attains top rankings in various search engines like Google, Yahoo, Bing, Baidu, etc. by strictly following only white hat SEO techniques to generate the right website traffic and results by increasing your ROI.</p>

            <p className="title">We are an <strong>ISO 9001:2015</strong> certified company with professional team of 35+ seasoned experts operating from Mumbai & New Delhi with 750+ satisfied clients in our portfolio.</p>

            <p className="title">If your business deserves no less, call on SIB Infotech The Best Website Designing, Development & SEO Agency in Mumbai for all your internet marketing & website development needs.</p>
          </div>
        </div>
      </section>
    <section className="bgGrey">
      <div className="containerFull">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-6 translate50">
                <Link href="#">
                  <a><div className="webDesignItem">
                    <div className="iconWe">
                        <img src="assets/images/icons/web-design.png" alt="Web Design"/>
                    </div>
                    <h4 className="small_heading fontWeight700">Website Designing</h4>
                    <p>Your website is your home on the internet (web). The Website Design is the first...</p>
                    <button><i className="fa fa-chevron-right"></i></button>
                  </div></a>
                </Link>
              </div>
              <div className="col-lg-6">
                <Link href="#">
                  <a><div className="webDesignItem">
                    <div className="iconWe">
                        <img src="assets/images/icons/settings.png" alt="Setting Icon"/>
                    </div>
                    <h4 className="small_heading fontWeight700">Custom Website Designing</h4>
                    <p>Using this one can start from just one simple page with an Email link, building...</p>
                    <button><i className="fa fa-chevron-right"></i></button>
                  </div></a>
                </Link>
              </div>
              <div className="col-lg-6 translate50">
                <Link href="#">
                  <a><div className="webDesignItem">
                    <div className="iconWe">
                        <img src="assets/images/icons/responsive-website.png" alt="responsive Website Icon"/>
                    </div>
                    <h4 className="small_heading fontWeight700">Responsive Website Designing</h4>
                    <p>Our web design uses the latest technology to look great on any screen sizes...</p>
                    <button><i className="fa fa-chevron-right"></i></button>
                  </div></a>
                </Link>
              </div>
              <div className="col-lg-6">
                <Link href="#">
                  <a><div className="webDesignItem">
                    <div className="iconWe">
                        <img src="assets/images/icons/ecommerce-website.png" alt="E-commerce Icon"/>
                    </div>
                    <h4 className="small_heading fontWeight700">E-commerce Website</h4>
                    <p>We develop affordable e-commerce website design for businesses in India, UK, USA, Australia ..</p>
                    <button><i className="fa fa-chevron-right"></i></button>
                  </div></a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 ps-lg-4">
            <div className="rightServicesWeb">
              <picture>
                <source srcSet="assets/images/programming-amico.webp" type="image/webp"/>
                <img src="assets/images/programming-amico.png" className="img-fluid" alt="Writng Programme"/>
              </picture>
              <h5 className="small_head text_red mt-4">We're offering</h5>
              <h4 className="regular_heading fontWeight700 mt-2">Website Design Services</h4>
              <p className="mt-3">We use latest technology and design innovations to develop creative, smart & user friendly websites to successfully connect users with brands. Empower yourself with the best website design company in India.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="bgTestimonial">
      <div className="containerFull">
        <div className="testimonialHeader">
          <h4 className="small_heading text-center text_red fontWeight700">DIGITAL MARKETING TESTIMONIALS</h4>
          <h3 className="heading text-center mt-2 fontWeight700">Clients say about our SEO Services</h3>
        </div>
        <SliderTestimonials/>
      </div>
    </section>
    <section className="bgAction">
      <div className="containerFull">
        <div className="d-flex align-items-center justify-content-between home_cta">
          <h4 className="sub_heading letterSpacing1 text-white fontWeight700">Want to know how you can grow your business,<br/>speak to our expert strategists now.</h4>
          <Link href="tel: +91-9222260000"><a className="btnAction">Let's Talk Growth <i className="bi bi-arrow-right"></i></a></Link>
        </div>
      </div>
    </section>
    <section className="dots">
        <div className="containerFull">
          <div className="row">
            <div className="col-lg-5">
              <div className="leftFAQ">
                <h4 className="heading fontWeight700">Frequently Asked <span className="text_red">Questions</span></h4>
                <p className="mt-2 fontWeight700">Our in-house team of recruitment specialists will nurture your leads all the way through to completed application. </p>
                <p className="mt-3 fontWeight700">We as a full service leading digital marketing firm, offers customized story-based digital marketing services to build, promote & scale your brand so it can clearly & easily attract your ideal clients.</p>
                <h4 className="small_heading fontWeight700 mt-4">We're ready to help you</h4>
                <div>
                  <Link href="tel: +91-9222260000"><a className="btnTheme mt-4"><i className="fa fa-phone"></i>  +91-9222260000</a></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="faqRight ps-lg-4">
                <Faqs/>
                <div className="text-end">
                  <Link href="#"><a className="link mt-2">See All <i className="fa fa-caret-right"></i></a></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>

    <section>
      <div className="containerFull">
        <h4 className="heading text-center mb-3 fontWeight700">From Our Blogs</h4>
          <div className="row mt-lg-3">
              {blogs && blogs.map((blog, index) => {
              if (index % 2 === 0) {
                return <div key={blog.id} className="col-lg-4">
                  <BlogCard blog={blog} />
                </div>;
              }
              return <div key={blog.id} className="col-lg-4" id="requestQuote">
                <BlogCard blog={blog} />
              </div>;
            })}
        </div>
      </div>
    </section>

  </div>
  )
}
