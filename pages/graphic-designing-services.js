import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';


export default function GraphicDesigningServices() {
  return (
    <div>
        <Head>
            <title>Graphic Designing Services</title>
        </Head>
        <div className="innerWebDesign">
            <div className="container-fluid">
                 <div className="row">
			        <div className="col-lg-7 ps-lg-5">
    					<div className="innerBannerTitle venter">
    						<h1 className="heading fontWeight700 text-white">Graphic Designing Services</h1>
    						<div className="mt-4">
    							<Link href="#requestQuote">
                    <a className="btnThemeRed me-3"><i class="fa-solid fa-comment-dots"></i> Get a Quote</a>
                  </Link>
    							<Link href="#">
                    <a className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</a>
                  </Link>
    						</div>
    					</div>
        			</div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Graphic Designing</span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Graphic Designing</span> Company in India</strong></p>
                <BannerForm/>
            </div>
        </div>
        <section>
            <div className="containerFull">
                <div className="row">
                    <div className="col-lg-6">
                        <h3 className="customHeading">
                            Best <span className="text_red">Graphic Designing</span> Company</h3>
                        <p className="customText">
                            The best graphic designs that leaves an impact on the customer's mind, is what we have been producing. SIB Infotech which is also one of the best leading graphic designing company that believes a solidly built brand can become a company’s greatest asset. we can work the best with start-ups or well-established enterprises to achieve their goals.</p>
                        <img className="image-full d-lg-none d-block" src="assets/images/graphic-img-3.svg" alt="Graphic Designing Company in India"/>
                        <p className="customText">
                            We help to organize your demands with our best and creative graphic designs that leave a permanent impression on your customers. We spend time in understanding the business, identifying key speaking points of our clients and finally creating powerful, creatives around them. We implant passion into design crafted graphically by the latest graphic designing methods and tools as per their requirements. Our talented team has a creative and innovative idea for your business promotion.</p>
                    </div>
                    <div className="col-lg-6 d-none d-lg-block">
                        <img className="image-full" src="assets/images/graphic-img-3.svg" alt="Graphic Designing Company in India"/></div>
                </div>
            </div>
        </section>
        <section className="bgGrey">
            <div className="containerFull">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="p-sticky">
                            <img className="image-full" src="assets/images/graphic-design-img-16.svg" alt="Best Graphic Designing Company in Delhi"/>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="row">
                            <h3 className="customHeading ml-10 tb_mt_30">
                                Custom <span className="text_red">graphic design</span> services we offer</h3>
                            <div className="col-lg-6">
                                <div className="graphic-services-box">
                                    <img src="assets/images/icons/graphic-img.svg" alt="Graphic Designing Company in Delhi"/>
                                    <h4>
                                        Brochure Designs</h4>
                                    <p className="customText">
                                        We provide graphic design for designing brochures that are best to captivate the attention of your customers and at the same time make them inquisitive.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="graphic-services-box">
                                    <img src="assets/images/icons/grapgic-img-4.svg" alt="Graphic Designing Agency in India"/>
                                    <h4>
                                        Banner Designs</h4>
                                    <p className="customText">
                                        If you need banners that instantly pique the interest of consumers with us, you need our graphic design services to let our experts design an expressive banner that makes them click. Our quality is what makes us a trusted provider of the best graphic design services in India.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="graphic-services-box">
                                    <img src="assets/images/icons/flyer.svg" alt="Graphic Designing Agency in India"/>
                                    <h4>
                                        Flyer Designs</h4>
                                    <p className="customText">
                                        If you need flyers that make people read without crumbling the piece of paper, we'll fill your need for a flyer design with high-quality graphic design services.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="graphic-services-box">
                                    <img src="assets/images/icons/package.svg" alt="Graphic Designing Agency in Delhi"/>
                                    <h4>
                                        Packaging Designs</h4>
                                    <p className="customText">
                                        Designing a package that makes people buy the product can be tricky. It demands exceptional design knowledge and awareness of the product.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="graphic-services-box">
                                    <img src="assets/images/icons/product.svg" alt="Graphic Designing Agency in Mumbai"/>
                                    <h4>
                                        3D Product Packaging Design</h4>
                                    <p className="customText">
                                        3D product packaging design is the next step to reach consumers that have a slightly different expectation from product manufacturers. Knowing what your audience need is where we begin, and we produce 3D designs at an affordable rate.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="graphic-services-box">
                                    <img src="assets/images/icons/label.svg" alt="Graphic Designing Firm in India"/>
                                    <h4>
                                        Label Designs</h4>
                                    <p className="customText">
                                        If you need label designs that are catchy and appropriate for calling the attention to your products, we have you covered. Our label designs will allow you to directly talk to consumers without appearing too salesy.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-7">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="graphic-services-box">
                                    <img src="assets/images/icons/flyrr.svg" alt="Graphic Designing Firm in Delhi"/>
                                    <h4>
                                        Logo Designs</h4>
                                    <p className="customText">
                                        We create powerful brand identities by offering high-quality logo design services. Get logos done at attractive quality and rates.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="graphic-services-box">
                                    <img src="assets/images/icons/graphic-img-5.svg" alt="Graphic Designing Firm in Mumbai"/>
                                    <h4>
                                        Logo Clean up</h4>
                                    <p className="customText">
                                        Do you need logos that look great on all media? Choose logo clean up service from us. We enhance the appearance to make it interesting across screen and print media.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="graphic-services-box">
                                    <img src="assets/images/icons/graphic-img-6.svg" alt="Graphic Designing Companies in India"/>
                                    <h4>
                                        Business Card Design</h4>
                                    <p className="customText">
                                        Custom business cards fashioned to your business or personal preference can be achieved through our graphic design services. Give our services a shot and we'll guarantee superb results to enhance your social value.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="graphic-services-box">
                                    <img src="assets/images/icons/graphic-img-7.svg" alt="Graphic Designing Companies in Delhi"/>
                                    <h4>
                                        Menu Design</h4>
                                    <p className="customText">
                                        Tastefully done menus that are truly bespoke for business can have done us even if you are stretched and on a limited budget. Our graphic design team has the best front-end expertise to make your website livelier and more interactive.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="graphic-services-box larg-height">
                                    <img src="assets/images/icons/graphic-img-8.svg" alt="Graphic Designing Companies in Mumbai"/>
                                    <h4>
                                        Social Media Creative Design</h4>
                                    <p className="customText">
                                        Social media has always an important part in the success of business products and services. A large number of audiences has faith in your business because they found your social media account creative and real.A best social media creative design by us will help you to achieve a strong social relationship with your target audience.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="graphic-services-box larg-height">
                                    <img src="assets/images/icons/graphic-img-9.svg" alt="Graphic Designing Service Companies in India"/>
                                    <h4>
                                        Print Media Design</h4>
                                    <p className="customText">
                                        Does your business card not having an impressive and good look? Is your product inventory stays on the mind of people after the first impression? If No, then you must take a look at our print media design services. We offers creative print designing services that help businesses to get professionally competitive spirit over the others in the industry.Our different and creative print designing services are always there to boost your business and help you to</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="p-sticky">
                            <img className="image-full" src="assets/images/icons/graphic-img-17.svg" alt="Top Graphic Designing Company in India"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="containerFull">
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <div className="leftDigiSer">
                            <div className="graphic-other-services-left">
                                <h3 className="customHeading text-white">
                                    Other Graphic Design Services</h3>
                                <p className="customText text-off-white">
                                    Other graphic design outsourcing companies don't match what we offer in terms of quality or pricing because we generate special designs for various other purposes by understanding your purpose. We also offer graphic designs for -</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="graphic-row tb_mt_30">
                            <div className="graphic-other-services-box">
                                <div className="graphic-other-services-circle">
                                    <img src="assets/images/icons/graphic-img-10.svg" alt="Graphic Designing Service Companies in Mumbai"/></div>
                                <h5>
                                    Website Designs</h5>
                            </div>
                            <div className="graphic-other-services-box">
                                <div className="graphic-other-services-circle">
                                    <img src="assets/images/icons/graphic-img-11.svg" alt="Graphic Designing Service Agency in India"/></div>
                                <h5>
                                    Animated Logos</h5>
                            </div>
                            <div className="graphic-other-services-box">
                                <div className="graphic-other-services-circle">
                                    <img src="assets/images/icons/graphic-img-12.svg" alt="Graphic Designing Service Agency in Delhi"/></div>
                                <h5>
                                    Letter Head Designs</h5>
                            </div>
                        </div>
                        <div className="graphic-row">
                            <div className="graphic-other-services-box">
                                <div className="graphic-other-services-circle">
                                    <img src="assets/images/icons/graphic-img-13.svg"  alt="Graphic Designing Service Agency in Mumbai"/></div>
                                <h5>
                                    Advertising Designs</h5>
                            </div>
                            <div className="graphic-other-services-box">
                                <div className="graphic-other-services-circle">
                                    <img src="assets/images/icons/graphic-img-14.svg" alt="Graphic Designing Service Firm in India"/></div>
                                <h5>
                                    Layout &amp; Formatting</h5>
                            </div>
                            <div className="graphic-other-services-box">
                                <div className="graphic-other-services-circle">
                                    <img src="assets/images/icons/graphic-img-15.svg" alt="Graphic Designing Service Firm in Delhi"/></div>
                                <h5>
                                    Full Vehicle Wraps</h5>
                            </div>
                        </div>
                        <div className="graphic-row">
                            <div className="graphic-other-services-box">
                                <div className="graphic-other-services-circle">
                                    <img src="assets/images/icons/graphic-img-16.svg" alt="Graphic Designing Service Firm in Mumbai"/></div>
                                <h5>
                                    Print &amp; Stationery design</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="bgGrey">
            <div className="containerFull">
                <div className="row">
                    <div className="col-lg-8 graphic-help-left">
                        <ul>
                            <li>
                                <p className="customText">
                                    A good and best graphic design connects different audiences and relate them to business in a specialway.</p>
                            </li>
                            <li>
                                <p className="customText">
                                    It is important for people to know how much professional your business is, whether it is a business card or a website, your professionalism shows through graphics.</p>
                            </li>
                            <li>
                                <p className="customText">
                                    A well created graphic design separates your business from cluster of businesses and makes you unique. And a distinctive design is a way to elaborate your products and services in a different way to your customer.</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-4">
                        <div className="graphic-help-right">
                            <h3 className="sub_heading">
                                How can a</h3>
                            <h4 className="regular_heading my-2">
                                Best <span className="text_red">Graphic Design</span></h4>
                            <h2 className="sub_heading">
                                help your Company?</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="containerFull">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="graphic-why-us-left">
                            <h3>
                                Want to get your</h3>
                            <h1>
                                <span className="text_red">brand noticed?</span></h1>
                            <Link href="/contact-us">
                              <a className="graphic-btn">Speak to our experts</a>
                            </Link></div>
                    </div>
                    <div className="col-lg-8">
                        <div className="blueBg mt-lg-0 mt-4">
                            <h3 className="customHeading text-white">
                                Why us for Graphic Design?</h3>
                            <p className="customText text-off-white">
                                A team that supports you in every sense as per requirements would obviously be your favourite!</p>
                            <ul>
                                <li>
                                    <p className="customText text-white">
                                        Cost efficient and best leading graphic designer.</p>
                                </li>
                                <li>
                                    <p className="customText text-white">
                                        We create powerful brand identities by offering high-quality logo design services.</p>
                                </li>
                                <li>
                                    <p className="customText text-white">
                                        To Get logos done at attractive quality and rates</p>
                                </li>
                                <li>
                                    <p className="customText text-white">
                                        Our logo design experts have years of experience to use creativity in a flexible way to fashion a logo the reflects your brand message.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
