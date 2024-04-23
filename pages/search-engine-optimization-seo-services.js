import Head from 'next/head';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function SearchEngineOptimizationServices() {
    useEffect(() => {
        AOS.init();
        return () => {
          AOS.refreshHard();
        };
      }, []);

    const [activeTab, setActiveTab] = useState("section1");
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
  return (
    <div>
        <Head>
            <title>Best SEO Company In India, SEO Services Mumbai, SEO Agency India</title>
            <meta name="description" content="Are you looking for the best SEO Company in India? SIB Infotech is the best SEO Company in India providing white-label SEO Services in India. With a comprehensive list of seo services."/>
            <meta name="keywords" content="SEO Company in India, SEO Company in Mumbai, SEO Agency India, SEO Agency in India, SEO Agency in Mumbai, seo services, seo services in India, seo services in Mumbai, seo optimization service, India seo company, seo providers in India, search engine optimization companies in India, seo firms India, search engine optimization agencies"/>
            <link rel="canonical" href="https://www.sibinfotech.com/search-engine-optimization-seo-services"/>
        </Head>
        <div id="bannerSection" className="innerWebDesign">
            <div className="container-fluid">
                 <div className="row">
			        <div className="col-lg-7 ps-lg-5">
    					<div className="innerBannerTitle venter">
    						<h1 className="heading fontWeight700 text-white">Best SEO Company in India to increase your Organic Traffic</h1>
    						<h2 className="small_heading fw-bold mt-2 text-white">We Can Help You:</h2>
                            <ul className="bannerIcon">
                                <li>
                                    <img src="assets/images/icons/visitor.png" alt="Customer"/>
                                    <div>Bring more customers to your Website</div>
                                </li>
                                <li>
                                    <img src="assets/images/icons/quality.png" alt="Customer"/>
                                    <div>Rank #1 on Google & Bing</div>
                                </li>
                                <li>
                                    <img src="assets/images/icons/computer-icon.png" alt="Customer"/>
                                    <div>Establishing a strong online presence</div>
                                </li>
                                <li>
                                    <img src="assets/images/icons/quality.png" alt="Customer"/>
                                    <div>Rank #1 on Google Maps</div>
                                </li>
                                <li>
                                    <img src="assets/images/icons/privacy-policy.png" alt="Customer"/>
                                    <div>Build trust & creditability with your audience</div>
                                </li>
                                <li>
                                    <img src="assets/images/icons/low-price-seo.png" alt="Customer"/>
                                    <div>Decreases Advertising Cost</div>
                                </li>
                            </ul>
    						<div className="mt-4">
    							<Link href="/contact-us">
                    <a className="btnThemeRed me-3">
                      <i class="fa-solid fa-comment-dots"></i> Get a Quote
                    </a>
                  </Link>
    							<Link href="/contact-us">
                    <a className="btnThemewhiteBorder">
                      <i className="fa-solid fa-circle-question"></i> Ask a Question
                    </a>
                  </Link>
    						</div>
    					</div>
        			</div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">SEO</span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">SEO</span> Company in India</strong></p>
                <BannerForm/>
            </div>
        </div>
        <section>
            <div className="containerFull">
                <div className="row">
                    <div className="col-lg-7">
                    <div class="rightPPC">
                        <h2 class="sub_heading fontHeading fontWeight600">SIB Infotech <span class="text_red">SEO Services In India</span> - Trusted By Over 1000+ Companies</h2>
                        <p class="customText mt-3"><strong>Since 2005</strong>, SIB Infotech has been providing excellent SEO services in India. We're known as the top SEO company, not just for delivering great results but also for boosting your online visibility and Return On Investment (ROI). Everyone knows that the first page of Google gets the most visitors, but did you know there's a big difference in how many people click on the top results compared to the bottom ones? Recent studies show the following click through rates on Google:</p>
                        <p className="cutomText mt-2">Remember, there's no such thing as second place. You're either first or nothing. With our years of experience as a leading SEO company in India, we know how important Search Engine Optimization (SEO) is for businesses.</p>
                    </div>
                    </div>
                    <div className="col-md-5">
                        <div className="rightSeoImgInner">
                            <div className="itemInfographic shadow" data-aos="zoom-in">
                                <h3 className="heading fontWeight600">7000</h3>
                                <p className="mt-2">Keywords ranked on 1st Page in Last 1 Year</p>
                            </div>
                            <div className="itemInfographic shadow" data-aos="zoom-in">
                                <h3 className="heading fontWeight600">50 <sub>%</sub></h3>
                                <p className="mt-2">Keywords Ranked in the Top 5 Positions</p>
                            </div>
                            <div className="itemInfographic shadow" data-aos="zoom-in">
                                <h3 className="heading fontWeight600">200 <sub>%</sub></h3>
                                <p className="mt-2">Traffic Growth in Last Year</p>
                            </div>
                            <div className="itemInfographic shadow" data-aos="zoom-in">
                                <h3 className="heading fontWeight600">97 <sub>%</sub></h3>
                                <p className="mt-2">Project Retention Rate in SEO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="bgSeo">
            <div className="containerFull">
                <div className="servicesBlock">
					<div className="d-flex justify-content-between align-items-center flex-wrap">
						<div className="leftSer">
							<h4 className="sub_heading text-white fontWeight700 fontHeading">We Offer Best SEO Services in India</h4>
						</div>
					</div>
                </div>
                <div className="seoMana">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="sidebarService stickyRow">
                                <ul>
                                    <li className={activeTab === 'section1' ? 'active' : ''} onClick={() => handleTabClick('section1')}>
                                        <div className="d-flex align-items-center">
                                            <h4 className="sub_heading me-3 fontHeading fontWeight600">01</h4>
                                            <h3 className="small_heading fontHeading fontWeight600">ON Page SEO</h3>
                                        </div>
                                    </li>
                                    <li className={activeTab === 'section2' ? 'active' : ''} onClick={() => handleTabClick('section2')}>
                                        <div className="d-flex align-items-center">
                                            <h4 className="sub_heading me-3 fontHeading fontWeight600">02</h4>
                                            <h3 className="small_heading fontHeading fontWeight600">OFF Page SEO</h3>
                                        </div>
                                    </li>
                                    <li className={activeTab === 'section3' ? 'active' : ''} onClick={() => handleTabClick('section3')}>
                                        <div className="d-flex align-items-center">
                                            <h4 className="sub_heading me-3 fontHeading fontWeight600">03</h4>
                                            <h3 className="small_heading fontHeading fontWeight600">Local SEO</h3>
                                        </div>
                                    </li>
                                    <li className={activeTab === 'section4' ? 'active' : ''} onClick={() => handleTabClick('section4')}>
                                        <div className="d-flex align-items-center">
                                            <h4 className="sub_heading me-3 fontHeading fontWeight600">04</h4>
                                            <h3 className="small_heading fontHeading fontWeight600">Technical SEO</h3>
                                        </div>
                                    </li>
                                    <li className={activeTab === 'section5' ? 'active' : ''} onClick={() => handleTabClick('section5')}>
                                        <div className="d-flex align-items-center">
                                            <h4 className="sub_heading me-3 fontHeading fontWeight600">05</h4>
                                            <h3 className="small_heading fontHeading fontWeight600">E-Commerce SEO</h3>
                                        </div>
                                    </li>
                                    <li className={activeTab === 'section6' ? 'active' : ''} onClick={() => handleTabClick('section6')}>
                                        <div className="d-flex align-items-center">
                                            <h4 className="sub_heading me-3 fontHeading fontWeight600">06</h4>
                                            <h3 className="small_heading fontHeading fontWeight600">Mobile SEO</h3>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="rightMain stickyRight">
                                {activeTab === 'section1' &&
                                    <div className="itemSidebar scroll" id="section1">
                                        <h4 class="sub_heading fontWeight700 fontHeading">ON Page SEO</h4>
                                        <p class="mt-3">On-page SEO is the foundation of any successful SEO strategy. At SIB Infotech, we specialize in providing comprehensive <Link href="/on-page-seo-services">
                                          <a>on-page SEO services</a>
                                        </Link> that help businesses achieve higher search engine rankings, increased traffic, and improved user engagement.</p>
                                        <p class="mt-2">On-page SEO is the sub-category that is useful in optimizing the on-page contents of your website which boosts your website ranking higher on search engines. It focuses on website tools like structure, content, and appearance. It includes the optimization of HTML tags and images on the website of your brand.</p>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <ul className="listItems">
                                                    <li>Extensive Keyword Research</li>
                                                    <li>Organic CTR Optimization</li>
                                                    <li>Content Optimization</li>
                                                    <li>Internal Linking Improvements</li>
                                                    <li>Local Schema Markup</li>
                                                    <li>Technical Code Audit Remediation</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {activeTab === 'section2' &&
                                    <div className="itemSidebar scroll" id="section2">
                                        <h4 class="sub_heading fontWeight700 fontHeading">OFF Page SEO</h4>
                                        <p class="mt-3">Off-page SEO is activities that are performed after the websites goes live. <Link href="/off-page-seo-services">
                                          <a>Off-page SEO Service</a>
                                        </Link> deals with the external links that direct traffic to your websites organically, also known as 'backlinks' This category deals with regulating the backlinks on other publisher's pages including blogs, which leads to building a reliable spot on the search engine and the rankings are set to the sky.</p>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <ul className="listItems">
                                                    <li>Domain Authority Improvement</li>
                                                    <li>Hyper-Local Link Building</li>
                                                    <li>Local Listing Management</li>
                                                    <li>Google My Business Profile</li>
                                                    <li>Bing Local & Apple Maps</li>
                                                    <li>Competitor Profile Targeting</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {activeTab === 'section3' &&
                                    <div className="itemSidebar scroll" id="section3">
                                        <h4 class="sub_heading fontWeight700 fontHeading">Local SEO</h4>
                                        <p class="mt-3">Put your business on the local map with our tailored <Link href="/local-seo-services">
                                          <a>Local SEO services</a>
                                        </Link>. We specialize in optimizing your online presence to attract local customers. From optimizing Google My Business profiles to ensuring accurate business information across directories, we ensure that your business is easily discoverable in local searches.</p>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <ul className="listItems">
                                                    <li>Google My Business Post</li>
                                                    <li>Google My Business Audit Report</li>
                                                    <li>Geo Tagging Image</li>
                                                    <li>NAP Citation</li>
                                                    <li>Map Citation</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {activeTab === 'section4' &&
                                    <div className="itemSidebar scroll" id="section4">
                                        <h4 class="sub_heading fontWeight700 fontHeading">Technical SEO</h4>
                                        <p class="mt-3"><Link href="/on-page-seo-services">
                                          <a>Technical SEO</a>
                                        </Link> focuses on the website's architecture and user interface that is the technical parameters that directly affect the visibility. It manages the technical set up of the website that is the code. Most search engines prioritize the website's code when ranking it for search engines.</p>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <ul className="listItems">
                                                    <li>Canonical Tag Management</li>
                                                    <li>Maintain Sitemap HTML & XML</li>
                                                    <li>Structure Data (Schema Mark-up)</li>
                                                    <li>Redirection 301 & 302</li>
                                                    <li>Site Structure Management</li>
                                                    <li>Server Error 5XX</li>
                                                    <li>Custom Error 404</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {activeTab === 'section5' &&
                                    <div className="itemSidebar scroll" id="section5">
                                        <h4 class="sub_heading fontWeight700 fontHeading">E-Commerce SEO</h4>
                                        <p class="mt-3">Fuel your online store's success with our <Link href="/e-commerce-seo-services">
                                          <a>E-Commerce SEO services</a>
                                        </Link>. We optimize product visibility, streamline the shopping experience, and boost your sales. Elevate your digital presence and make your products stand out in the competitive online marketplace with our tailored solutions. Your success is our focus in the world of e-commerce.</p>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <ul className="listItems">
                                                    <li>Performing Keyword research</li>
                                                    <li>Improving Site Structure</li>
                                                    <li>Optimizing for ON-Page SEO Elements</li>
                                                    <li>Create Quality Content</li>
                                                    <li>High Quality Link Building</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {activeTab === 'section6' &&
                                    <div className="itemSidebar scroll" id="section6">
                                        <h4 class="sub_heading fontWeight700 fontHeading">Mobile SEO</h4>
                                        <p class="mt-3">Mobile SEO is based on its name, which is meant for mobile devices. At present more than 60% of Google searches are done on mobile phones. This <Link href="/mobile-seo-services">
                                          <a>Mobile SEO service</a>
                                        </Link> optimizes your website on phones and makes it mobile-friendly</p>
                                        <div className="row">
                                            <div className="col-lg-7">
                                                <ul className="listItems">
                                                    <li>Mobile First Index</li>
                                                    <li>Implement a Mobile Friendly Website Consignment</li>
                                                    <li>Optimize Meta Tiles & Descriptions</li>
                                                    <li>Optimize images for Mobile Devices</li>
                                                    <li>Optimize Mobile Website Speed</li>
                                                    <li>Improve Mobile User Experience</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="containerFull">
                <div className="row">
                    <div className="col-lg-12">
                        <h3 className="sub_heading fontWeight500 fontHeading">Some of the Best SEO Tools for Auditing & Monitoring Effective SEO used by us.</h3>
                    </div>
                </div>
                <div className="row mt-lg-3">
                    <div className="col-lg-2 col-6 col-sm-3">
                        <div className="toolsLogo">
                            <img src="assets/images/google-search-console.webp" alt="Google Search Console Logo"/>
                        </div>
                    </div>
                    <div className="col-lg-2 col-6 col-sm-3">
                        <div className="toolsLogo">
                            <img src="assets/images/moz.webp" alt="Moz Logo"/>
                        </div>
                    </div>
                    <div className="col-lg-2 col-6 col-sm-3">
                        <div className="toolsLogo">
                            <img src="assets/images/searchmetrics.webp" alt="Searchmetrics Logo"/>
                        </div>
                    </div>
                    <div className="col-lg-2 col-6 col-sm-3">
                        <div className="toolsLogo">
                            <img src="assets/images/semrush.webp" alt="Semrush Logo"/>
                        </div>
                    </div>
                    <div className="col-lg-2 col-6 col-sm-3">
                        <div className="toolsLogo">
                            <img src="assets/images/ahrefs.webp" alt="ahrefs Logo"/>
                        </div>
                    </div>
                    <div className="col-lg-2 col-6 col-sm-3">
                        <div className="toolsLogo">
                            <img src="assets/images/screamingfrog.webp" alt="Screaming Frog Logo"/>
                        </div>
                    </div>
                    <div className="col-lg-2 col-6 col-sm-3">
                        <div className="toolsLogo">
                            <img src="assets/images/similarweb.webp" alt="Similar Web Logo"/>
                        </div>
                    </div>
                    <div className="col-lg-2 col-6 col-sm-3">
                        <div className="toolsLogo">
                            <img src="assets/images/rankwatch.webp" alt="Rankwatch Logo"/>
                        </div>
                    </div>
                    <div className="col-lg-2 col-6 col-sm-3">
                        <div className="toolsLogo">
                            <img src="assets/images/ubersuggest.webp" alt="Ubersuggest Logo"/>
                        </div>
                    </div>
                    <div className="col-lg-2 col-6 col-sm-3">
                        <div className="toolsLogo">
                            <img src="assets/images/kwfinder.webp" alt="KW finder Logo"/>
                        </div>
                    </div>
                    <div className="col-lg-2 col-6 col-sm-3">
                        <div className="toolsLogo">
                            <img src="assets/images/spy-fu.webp" alt="Spy Fu Logo"/>
                        </div>
                    </div>
                    <div className="col-lg-2 col-6 col-sm-3">
                        <div className="toolsLogo">
                            <img src="assets/images/quilbot.webp" alt="Quilbot Logo"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="seoCallAction">
            <div className="containerFull">
                <div className="row align-items-center">
                    <div className="col-lg-8">
                        <div className="leftAction">
                            <h4 className="sub_heading text-white fontHeading fontWeight500">Are you ready to Expand Your Business online with our SEO Services?</h4>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="rightAction text-center">
                            <a href="#bannerSection" className="btnAction">Speak with one of our SEO Experts in India today!</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="containerFull">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="leftBenefits">
                            <h4 className="sub_heading fontHeading fontWeight700">Benefits of getting the SEO Services from the Best SEO Company in India</h4>
                            <p className="mt-3">SIB Infotech, a leading SEO company in India, offers a comprehensive suite of services designed to optimize your online presence. Through proprietary methods, meticulous keyword research, and insightful competitor analysis, we guarantee success by implementing effective SEO techniques. With a wealth of expertise and experience, SIB Infotech propels your brand to new heights, securing top rankings on major search engines and connecting you with a broader audience. Our commitment lies in making crucial website improvements that resonate with your target market, ensuring sustained visibility and attracting a steady stream of new customers.</p>
                            <p className="mt-2">At SIB Infotech, we understand the dynamics of the digital landscape, and our tailored approach to SEO is geared towards delivering tangible results. Renowned for our dedication to excellence, we employ self-developed strategies that go beyond conventional methods, ensuring your brand not only stands out but thrives in the competitive online marketplace.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="rightBenefit">
                            <ul>
                                <li>Increase Organic Traffic FREE</li>
                                <li>Increase Leads</li>
                                <li>Increase Sales</li>
                                <li>Increase Conversions</li>
                                <li>Increase User Engagements</li>
                                <li>Increase Online Visibility</li>
                                <li>Increase Search Engine Ranking</li>
                                <li>Increase Domain Authority</li>
                                <li>Increase Online Reputation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="bgGrey">
            <div className="containerFull">
                <div className="text-center">
                    <h3 className="small_heading fontHeading">How to Create an Effective Winning SEO Strategy in {(new Date().getFullYear())}</h3>
                    <h4 className="sub_heading">Our 4 Step SEO Process Key to SEO Success.</h4>
                </div>
                <div className="row mt-lg-4">
                    <div className="col-lg-3">
                        <div className="itemProccess">
                            <div className="numberLeft">
                                <h5 className="textNumber textStrokeDarkBlue">1</h5>
                            </div>
                            <div className="numberRight">
                                <div className="processHeader">
                                    <h4 className="small_heading text_dark_blue fontHeading fontWeight600">Organic SEO Strategy Building</h4>
                                </div>
                                <ul>
                                    <li>Detailed Competitor Analysis</li>
                                    <li>Audience Requirements Analysis</li>
                                    <li>Keyword Research</li>
                                    <li>Website SEO Audit</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="itemProccess">
                            <div className="numberLeft">
                                <h5 className="textNumber textStrokeRed">2</h5>
                            </div>
                            <div className="numberRight">
                                <div className="processHeader">
                                    <h4 className="small_heading text_red fontHeading fontWeight600">Website<br className="d-none d-lg-block"/> Optimization</h4>
                                </div>
                                <ul>
                                    <li>Quality Content and Copywriting</li>
                                    <li>Resolve Technical Issues</li>
                                    <li>Analytics and Data Tracking Setup</li>
                                    <li>Sitemap Submission</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="itemProccess">
                            <div className="numberLeft">
                                <h5 className="textNumber textStrokeBlue">3</h5>
                            </div>
                            <div className="numberRight">
                                <div className="processHeader">
                                    <h4 className="small_heading text_light_blue fontHeading fontWeight600">Implementation and Link Building</h4>
                                </div>
                                <ul>
                                    <li>Authentic and Quality Link Building</li>
                                    <li>Local SEO Optimization</li>
                                    <li>Off page SEO</li>
                                    <li>On page SEO</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="itemProccess">
                            <div className="numberLeft">
                                <h5 className="textNumber textStrokeRed">4</h5>
                            </div>
                            <div className="numberRight">
                                <div className="processHeader">
                                    <h4 className="small_heading text_red fontHeading fontWeight600">Reporting and Monitoring</h4>
                                </div>
                                <ul>
                                    <li>Monthly Reporting and performance</li>
                                    <li>Conversion Goal Optimisation</li>
                                    <li>Regular Trend Analysis</li>
                                    <li>Client Review</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="bgAction2">
            <div className="containerFull">
                <div className="row align-items-center">
                    <div className="col-lg-9">
                        <div className="leftAction">
                            <h4 className="sub_heading text-white fontHeading fontWeight500">How can we help you to Stop Loosing Leads to Your Competitors?	</h4>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="rightAction text-center">
                            <a href="#bannerSection" className="btnAction mt-2">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="containerFull">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="leftSeoCompany">
                            <img src="assets/images/seo-company.jpg" alt="SEO Company"/>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="rightSeoCompany">
                            <h4 className="sub_heading fontHeading">We are more than just a SEO Company</h4>
                            <p className="mt-3">As a leading SEO agency in India, we pride ourselves on a remarkable track record, successfully managing over <strong>1350+ projects</strong> within distinct niches. Our dedicated teams specialize in various sectors, ensuring businesses achieve top rankings. Whether its real estate SEO, healthcare SEO, education SEO, or technology-based SEO, each niche benefits from a specialized team with the requisite skills and extensive industry experience. This targeted approach allows us to comprehend specific business requirements, leading to outstanding results.</p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li>Professional SEO Experts</li>
                                        <li>Customizable Strategies</li>
                                        <li>Transparent Reporting</li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li>24/7 Support & Care</li>
                                        <li>Affordable SEO Packages</li>
                                        <li>Guaranteed 100% Client Satisfaction</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="bgSpecialized">
            <div className="containerFull">
                <div class="row">
                    <div class="col-lg-10">
                        <h3 class="sub_heading text-white fontWeight500 fontHeading">Our Specialised Search Engine Optimization Services:</h3>
                    </div>
                </div>
                <div className="mt-lg-5 row">
                    <div className="col-lg-4 col-6 col-sm-4">
                        <div className="itemSpecialization">
                            <div className="iconSpecialization">
                                <picture>
                                    <img src="assets/images/icons/shopping-cart.png" alt="Shopping Cart"/>
                                </picture>
                            </div>
                            <p className="title fontHeading">eCommerce SEO</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-6 col-sm-4">
                        <div className="itemSpecialization">
                            <div className="iconSpecialization">
                                <picture>
                                    <img src="assets/images/icons/plane.png" alt="Plane"/>
                                </picture>
                            </div>
                            <p className="title fontHeading">Travel SEO</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-6 col-sm-4">
                        <div className="itemSpecialization">
                            <div className="iconSpecialization">
                                <picture>
                                    <img src="assets/images/icons/folder.png" alt="Folder"/>
                                </picture>
                            </div>
                            <p className="title fontHeading">SEO for News Website</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-6 col-sm-4">
                        <div className="itemSpecialization">
                            <div className="iconSpecialization">
                                <picture>
                                    <img src="assets/images/icons/amazon.png" alt="Amazon"/>
                                </picture>
                            </div>
                            <p className="title fontHeading">Amazon SEO</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-6 col-sm-4">
                        <div className="itemSpecialization">
                            <div className="iconSpecialization">
                                <picture>
                                    <img src="assets/images/icons/shopify.png" alt="Shopify"/>
                                </picture>
                            </div>
                            <p className="title fontHeading">Shopify SEO</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-6 col-sm-4">
                        <div className="itemSpecialization">
                            <div className="iconSpecialization">
                                <picture>
                                    <img src="assets/images/icons/bars.png" alt="Finance"/>
                                </picture>
                            </div>
                            <p className="title fontHeading">Finance SEO</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-6 col-sm-4">
                        <div className="itemSpecialization">
                            <div className="iconSpecialization">
                                <picture>
                                    <img src="assets/images/icons/localseo.png" alt="Local SEO"/>
                                </picture>
                            </div>
                            <p className="title fontHeading">Local SEO</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-6 col-sm-4">
                        <div className="itemSpecialization">
                            <div className="iconSpecialization">
                                <picture>
                                    <img src="assets/images/icons/building.png" alt="Real Estate"/>
                                </picture>
                            </div>
                            <p className="title fontHeading">Real Estate SEO</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-6 col-sm-4">
                        <div className="itemSpecialization">
                            <div className="iconSpecialization">
                                <picture>
                                    <img src="assets/images/icons/health.png" alt="Health"/>
                                </picture>
                            </div>
                            <p className="title fontHeading">Health Care SEO</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="containerFull">
                <h3 class="sub_heading fontWeight500 fontHeading">We can Get Featured you on Top News Websites</h3>
                <div className="mt-3 row row-cols-2 row-cols-lg-5">
                    <div className="col px-2 px-lg-3">
                        <div className="newsLogo">
                            <img src="assets/images/news-logo/abc-news.webp" alt="abc-news"/>
                        </div>
                    </div>
                    <div className="col px-2 px-lg-3">
                        <div className="newsLogo">
                            <img src="assets/images/news-logo/associated-press.webp" alt="associated-press"/>
                        </div>
                    </div>
                    <div className="col px-2 px-lg-3">
                        <div className="newsLogo">
                            <img src="assets/images/news-logo/buzzfeed.webp" alt="buzzfeed"/>
                        </div>
                    </div>
                    <div className="col px-2 px-lg-3">
                        <div className="newsLogo">
                            <img src="assets/images/news-logo/cnn.webp" alt="CNN"/>
                        </div>
                    </div>
                    <div className="col px-2 px-lg-3">
                        <div className="newsLogo">
                            <img src="assets/images/news-logo/forbes.webp" alt="forbes"/>
                        </div>
                    </div>
                    <div className="col px-2 px-lg-3">
                        <div className="newsLogo">
                            <img src="assets/images/news-logo/fox.webp" alt="fox"/>
                        </div>
                    </div>
                    <div className="col px-2 px-lg-3">
                        <div className="newsLogo">
                            <img src="assets/images/news-logo/google-news.webp" alt="google-news"/>
                        </div>
                    </div>
                    <div className="col px-2 px-lg-3">
                        <div className="newsLogo">
                            <img src="assets/images/news-logo/huffpost.webp" alt="huffpost"/>
                        </div>
                    </div>
                    <div className="col px-2 px-lg-3">
                        <div className="newsLogo">
                            <img src="assets/images/news-logo/ibt.webp" alt="ibt"/>
                        </div>
                    </div>
                    <div className="col px-2 px-lg-3">
                        <div className="newsLogo">
                            <img src="assets/images/news-logo/msnbc.webp" alt="MSNBC"/>
                        </div>
                    </div>
                    <div className="col px-2 px-lg-3">
                        <div className="newsLogo">
                            <img src="assets/images/news-logo/nbc.webp" alt="nbc"/>
                        </div>
                    </div>
                    <div className="col px-2 px-lg-3">
                        <div className="newsLogo">
                            <img src="assets/images/news-logo/pbs.webp" alt="pbs"/>
                        </div>
                    </div>
                    <div className="col px-2 px-lg-3">
                        <div className="newsLogo">
                            <img src="assets/images/news-logo/the-new-york-times.webp" alt="The New York Times"/>
                        </div>
                    </div>
                    <div className="col px-2 px-lg-3">
                        <div className="newsLogo">
                            <img src="assets/images/news-logo/usa-today.webp" alt="USA Today"/>
                        </div>
                    </div>
                    <div className="col px-2 px-lg-3">
                        <div className="newsLogo">
                            <img src="assets/images/news-logo/yahoo.webp" alt="Yahoo"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="bgAction2">
            <div className="containerFull">
                <div className="row align-items-center">
                    <div className="col-lg-9">
                        <div className="leftAction rightSpace">
                            <h4 className="sub_heading text-white fontHeading fontWeight500">80% of Customers will never look past the first search engine results page.</h4>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="rightAction text-center">
                            <a href="#bannerSection" className="btnAction w-100 mt-2">Get to know how</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="faqsBg">
            <div className="containerFull">
                <h3 class="sub_heading fontWeight500 text-white fontHeading">Do You have Questions about Working with SEO Agency in India? <br className="d-none d-lg-block"/> We’ve got your answers.</h3>
                <div className="row mt-4">
					<div className="col-lg-6">
						<div className="faqRight mt-lg-4 mt-3">
							<div className="accordion" id="accordionExample">
							  <div className="accordion-item">
							    <h2 className="accordion-header" id="headingOne">
							      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
							       1. What is SEO?
							      </button>
							    </h2>
							    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
							      <div className="accordion-body">
							      	<p>SEO or ‘search engine optimization is the process of improving the quality and quantity of website traffic. This is achieved by increasing its visibility on search engines, improving rankings for unpaid results. As a marketing strategy, SEO has long-term benefits and provides a high return-on-investment.</p>
							      </div>
							    </div>
							  </div>
							  <div className="accordion-item">
							    <h2 className="accordion-header" id="headingTwo">
							      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
							       	2. What are your SEO plans?
							      </button>
							    </h2>
							    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
							      <div className="accordion-body">
							        <p className="customText">
                                            SEO is a results-oriented process that requires goal strategies to bring good results. We continuously strive to provide a complete package of SEO services including:</p>
                                        <ul className="listFlexItem">
                                            <li>
                                                Content analysis and optimization</li>
                                            <li>
                                                Website Structure Analysis</li>
                                            <li>
                                                Off-Page SEO and On-Page SEO</li>
                                            <li>
                                                Website code optimization</li>
                                            <li>
                                                Website structure optimization</li>
                                            <li>
                                                Keyword Research</li>
                                            <li>
                                                Local SEO Content Writing and Placement</li>
                                        </ul>
                                        <p className="customText">
                                            <strong>SEO Plans are based on customer requirements and their objective. Our SEO Packages offered are tailored made suitable for all kinds of budgets</strong></p>
							      </div>
							    </div>
							  </div>
							  <div className="accordion-item">
							    <h2 className="accordion-header" id="headingThree">
							      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
							        3. How long does it take to see the result?
							      </button>
							    </h2>
							    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
							      <div className="accordion-body">
							        <p>SEO grows over time and the entire SEO process takes about 3 to 6 months to see the expected results, with a minimum of 2 to 3 months in link building, on-page optimization, off-page optimization, content creation, and marketing. Is complete. Another fact is that SEO results are expected to increase over time, so results in 6 months will be slightly lower than in 12 months</p>
							      </div>
							    </div>
							  </div>
							  <div className="accordion-item">
							    <h2 className="accordion-header" id="headingFour">
							      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
							       4. What is the cost of SEO services?
							      </button>
							    </h2>
							    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
							      <div className="accordion-body">
							        <p>Our SEO services' cost depends on the client's requirements. We provide custom SEO packages tailor-made to fit as per clients budget for SEO. We cover a vast range of services in our SEO packages' intending to improve website traffic and bring higher ranking on Google search result pages.</p>
							      </div>
							    </div>
							</div>
							<div className="accordion-item">
							    <h2 className="accordion-header" id="headingFive">
							      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
							       5. Why do you need SEO service for your website?
							      </button>
							    </h2>
							    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
							      <div className="accordion-body">
							        <p>SEO services offer visibility to your websites and improve SEO ranking gradually over search engines like Google, Yahoo, Bing, DuckDuckGo etc. A high ranking website would bring more traffic to its website and help lead generation for the business.</p>
							      </div>
							    </div>
							</div>
							<div className="accordion-item">
							    <h2 className="accordion-header" id="headingSix">
							      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
							       6. Ask for an initial SEO audit of your website?
							      </button>
							    </h2>
							    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
							      <div className="accordion-body">
							        <p>We offer free SEO audit services as a part of the entire SEO package. We have dedicated professionals to provide SEO audit reports for your website, unlike some SEO companies in India that entirely rely on audit tools. We ensure that the audit report is developed thoroughly with covering elements like keyword research and competitor analysis.</p>
							      </div>
							    </div>
							</div>
							<div className="accordion-item">
							    <h2 className="accordion-header" id="headingSeven">
							      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
							       7. How much does SEO Services cost per month?
							      </button>
							    </h2>
							    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
							      <div className="accordion-body">
							        <p>Our SEO services' cost depends on the client's requirements. We provide custom SEO packages tailor-made to fit as per client's budget for SEO. We cover a vast range of services in our SEO packages' intending to improve website traffic and bring higher ranking on Google search result pages. SEO packages start from around USD 300 per month onwards.</p>
							      </div>
							    </div>
							</div>
						</div>
					</div>
					</div>
					<div className="col-lg-6">
						<div className="faqRight mt-lg-4 mt-0">
							<div className="accordion" id="accordionExample2">
							  <div className="accordion-item">
							    <h2 className="accordion-header" id="headingTen1">
							      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen1" aria-expanded="false" aria-controls="collapseTen">
							        8. Is SEO worth it in {(new Date().getFullYear())}?
							      </button>
							    </h2>
							    <div id="collapseTen1" className="accordion-collapse collapse" aria-labelledby="headingTen1" data-bs-parent="#accordionExample2">
							      <div className="accordion-body">
							      	<p>With years crossing by, the emphasis on SEO is never degrading instead it is turning more prominent than ever. It is one of the most compelling digital marketing strategies that stimulate long-term results. In {(new Date().getFullYear())}, SEO continues to be significant and savvy marketers should discover their ways of managing content marketing alongside other traffic channels such as social media management. By targeting long-tailed keywords, SEO as inbound marketing broadens your brand's reach.</p>
							      </div>
							    </div>
							  </div>
							  <div className="accordion-item">
							    <h2 className="accordion-header" id="headingEleven">
							      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
							       	9. Why SEO services are so expensive?
							      </button>
							    </h2>
							    <div id="collapseEleven" className="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#accordionExample2">
							      <div className="accordion-body">
							        <p className="customText">
                                            <strong>There are several reasons for SEO being expensive:</strong></p>
                                        <ul className="listFlexItem">
                                            <li>
                                                It is a time taking process.</li>
                                            <li>
                                                Calls for several resources to build up and maintain a campaign.</li>
                                            <li>
                                                Relies on the expertise of the SEO specialist to establish and advance your strategy.</li>
                                        </ul>
							      </div>
							    </div>
							  </div>
							  <div className="accordion-item">
							    <h2 className="accordion-header" id="headingThirteen">
							      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="true" aria-controls="collapseThirteen">
							        10. How do you rank first on Google?
							      </button>
							    </h2>
							    <div id="collapseThirteen" className="accordion-collapse collapse" aria-labelledby="headingThirteen" data-bs-parent="#accordionExample2">
							      <div className="accordion-body">
							        <p>There is no tried and tested method for ranking first on Google. However, with the right keywords and SEO campaigns, your chances of ranking high can be increased. For that, you'll have to create tons of optimized content and you're good to go! With the right strategies, this will happen much sooner than you think.</p>
							      </div>
							    </div>
							  </div>
							  <div className="accordion-item">
							    <h2 className="accordion-header" id="headingFourteen">
							      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourteen" aria-expanded="false" aria-controls="collapseFourteen">
							       11. How does Google rank SEO?
							      </button>
							    </h2>
							    <div id="collapseFourteen" className="accordion-collapse collapse" aria-labelledby="headingFourteen" data-bs-parent="#accordionExample2">
							      <div className="accordion-body">
							        <p>Authority and relevancy are the two primary things Google looks for when crawling a website. Google will produce the results based on algorithms and information gathered by the spiders. These web pages are placed on the search results page in an order reflecting their page.</p>
							      </div>
							    </div>
							</div>
							<div className="accordion-item">
							    <h2 className="accordion-header" id="headingFiveteen">
							      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFiveteen" aria-expanded="false" aria-controls="collapseFiveteen">12. How do I choose a company for SEO?
							      </button>
							    </h2>
							    <div id="collapseFiveteen" className="accordion-collapse collapse" aria-labelledby="headingFiveteen" data-bs-parent="#accordionExample2">
							      <div className="accordion-body">
							       <p className="customText">
                                            For choosing a suitable SEO Company for your brand follows these six steps:</p>
                                        <ul>
                                            <li>
                                                Ask for examples and case studies of successful SEO campaigns.</li>
                                            <li>
                                                Think beyond SEO.</li>
                                            <li>
                                                Visit the SEO Company in person.</li>
                                            <li>
                                                Understand the risks of low-cost SEO agencies.</li>
                                            <li>
                                                Avoid SEO guarantees.</li>
                                            <li>
                                                Familiarize yourself with SEO pricing models and make an SEO budget.</li>
                                        </ul>
							      </div>
							    </div>
							</div>
							<div className="accordion-item">
							    <h2 className="accordion-header" id="headingSixteen">
							      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSixteen" aria-expanded="false" aria-controls="collapseSixteen">13. What are SEO tools?
							      </button>
							    </h2>
							    <div id="collapseSixteen" className="accordion-collapse collapse" aria-labelledby="headingSixteen" data-bs-parent="#accordionExample2">
							      <div className="accordion-body">
							        <p>SEO tools determine the potential of your webpage for high rankings in search engine results. They provide keywords and backlinks information as well as insights into SEO competition on the Internet.</p>
							      </div>
							    </div>
							</div>
                            <div className="accordion-item">
							    <h2 className="accordion-header" id="headingSeventeen">
							      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeventeen" aria-expanded="false" aria-controls="collapseSeventeen">14. Why Hire SEO Company in India?
							      </button>
							    </h2>
							    <div id="collapseSeventeen" className="accordion-collapse collapse" aria-labelledby="headingSeventeen" data-bs-parent="#accordionExample2">
							      <div className="accordion-body">
							        <p>Hiring an SEO company in India is a strategic choice fueled by a vast pool of skilled professionals focused on digital marketing. The cost-effective nature of Indian SEO services, coupled with competitive pricing, ensures businesses receive optimal value. With a proven track record and a diverse talent pool, these companies bring innovation and expertise to enhance online presence. The ability to navigate evolving industry trends and leverage cultural diversity allows for nuanced and targeted SEO strategies. Businesses can trust in achieving improved search engine rankings, driving organic traffic, and ultimately experiencing sustained growth by tapping into the comprehensive offerings of Indian SEO companies.</p>
							      </div>
							    </div>
							</div>
						</div>
                        </div>
					</div>
				</div>
            </div>
        </section>
        <section className="dots curve1 bgEffect">
            <div className="containerFull">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div>
                            <h4 className="sub_heading fontHeading fontWeight600">Ready to Grow your Business Online</h4>
                            <h4 className="sub_heading fontHeading mt-3 fontWeight600">Hire SIB Infotech as your Next SEO agency in India</h4>
                            <p className="title mt-4 fontWeight500">Click on the button below for <span className="fontWeight800">free SEO Audit</span></p>
                            <a href="#bannerSection" className="btnTheme mt-4">Get your proposal today </a>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-lg-0 mt-4">
                        <div className="desktopFrame">
                            <picture>
                                <source srcSet="assets/images/desktop-frame.webp"/>
                                <img src="assets/images/desktop-frame.png" alt="Desktop Frame"/>
                            </picture>
                            <div className="frameActivity">
                                <div className="googleLogo">
                                    <picture>
                                        <source srcSet="assets/images/google-social.webp"/>
                                        <img src="assets/images/google-social.png" alt="Google Logo"/>
                                    </picture>
                                </div>
                                <div className="searchResult shadow">
                                    <div className="searchBar">
                                        <div className="searchLeftIcon">
                                            <picture>
                                                <source srcSet="assets/images/search-interface-symbol.webp"/>
                                                <img src="assets/images/search-interface-symbol.png" alt="Search IconS"/>
                                            </picture>
                                        </div>
                                        <p>What SEO Service does SIB Infotech Offers</p>
                                        <div className="searchIconsRight">
                                            <picture>
                                                <source srcSet="assets/images/google-icon.webp"/>
                                                <img src="assets/images/google-icon.png" alt="Google Icons"/>
                                            </picture>
                                        </div>
                                    </div>
                                    <div className="listSearch">
                                        <ul>
                                            <li>Ecommerce Services</li>
                                            <li>Mobile SEO Services</li>
                                            <li>Local SEO Servicess</li>
                                            <li>On Page SEO Services </li>
                                            <li>Off Page SEO Services </li>
                                            <li>Amazon SEO</li>
                                            <li>Travel SEO</li>
                                            <li>Shopify SEO</li>
                                            <li>Real Estate SEO</li>
                                            <li>Health Care SEO</li>
                                            <li>Finance SEO</li>
                                            <li>Ecommerce SEO services India</li>
                                            <li>Best SEO Company in Mumbai </li>
                                            <li>Best SEO Company in Delhi </li>
                                            <li>Best SEO Company in Kolkata </li>
                                            <li>Best SEO Company in Hyderabad </li>
                                            <li>Best SEO Company in Jaipur </li>
                                            <li>Best SEO Company in Bangalore </li>
                                            <li>Best SEO Company in Pune </li>
                                            <li>Best SEO Company in London </li>
                                            <li>Best SEO Company in Las Vegas </li>
                                            <li>Best SEO Company in Los Angeles </li>
                                            <li>Best SEO Company in Australia </li>
                                            <li>Best SEO Company in Texas </li>
                                            <li>Best SEO Company in Dallas </li>
                                            <li>Best SEO Company in New Zealand  </li>
                                            <li>Best SEO Company in New York </li>
                                            <li>Best SEO Company in San Francisco </li>
                                            <li>Best SEO Company in Vancouver </li>
                                            <li>Best SEO Company in Canada </li>
                                            <li>Best SEO Company in Austin </li>
                                            <li>Best SEO Company in California </li>
                                            <li>Best SEO Company in San Jose </li>
                                            <li>Best SEO Company in Phoenix</li>
                                            <li>Best SEO Company in Whittmer</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
