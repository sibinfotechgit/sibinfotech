import React, { useContext, useEffect, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Footer() {

    return (
      <div>
          <section className="footerForm" id="requestQuote">
              <div className="containerFull">
                  <div className="row">
                      <div className="col-lg-2">
                          <div className="leftFooterForm">
                              <h4 className="small_heading">Get a Free Quote</h4>
                          </div>
                      </div>
                      <div className="col-lg-10">
                          <form>
                              <div className="formRightFooter">
                                  <input required="" type="text" name="name" placeholder="Name"/>
                                  <input required="" type="email" name="email" placeholder="E-mail"/>
                                  <div className="form_fax" style={{display: 'none'}}>
                                      <input type="text" className="form-control" placeholder="Please enter fax" name="fax" title="Please enter fax"/>
                                  </div>
                                  <textarea required="" name="message" placeholder="Message"></textarea>
                                  <button type="submit" name="submit" className="btnThemeRed">Submit</button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </section>
          <footer className="footerNew">
              <div className="container-fluid ps-0">
                  <div className="row">
                  <div className="col-lg-3 px-0 px-lg-2">
                      <div className="firstColumn position-relative text-center">
                      <h4 className="sub_heading text_white"><i className="fa fa-mobile-alt pe-3 text_red"></i> Let's Talk</h4>
                      <Link href="tel:+91-92222-60000"><a className="sub_heading2 text-white my-3 d-inline-block">+91-92222-60000</a></Link>
                      <h4 className="sub_heading fontWeight300 text_white_light">Need some<br/> great marketing?<br/> We deliver.</h4>
                      <div>
                          <Link href="/contact-us"><a className="footerLeft">Get Started</a></Link>
                      </div>
                      </div>
                  </div>
                  <div className="col-lg-9">
                      <div className="row">
                      <div className="col-lg-11">
                          <div className="rightFooterColumn">
                          <div className="row">
                              <div className="col-lg-3">
                              <div className="footerColumn">
                                  <h4>Internet Marketing</h4>
                                  <ul>
                                  <li><Link href="/social-media-optimization-services"><a>Social Media Optimization</a></Link></li>
                                  <li><Link href="/pay-per-click-ppc-management-services"><a>PPC Management</a></Link></li>
                                  <li><Link href="/search-engine-marketing-companies-mumbai-india"><a>Search Engine Marketing</a></Link></li>
                                  <li><Link href="/online-reputation-management-services"><a>Reputation Management</a></Link></li>
                                  <li><Link href="/paid-inclusion-services-mumbai-india"><a>Paid Search Engine Inclusion</a></Link></li>
                                  <li><Link href="/email-marketing-services-companies-mumbai-india"><a>Email Marketing</a></Link></li>
                                  <li><Link href="/press-release-submission-services"><a>PR Submission</a></Link></li>
                                  <li><Link href="/regional-local-seo-services"><a>Google Local Listing</a></Link></li>
                                  </ul>
                              </div>
                              </div>
                              <div className="col-lg-3">
                              <div className="footerColumn">
                                  <h4>Website Development</h4>
                                  <ul>
                                  <li><Link href="/erp-crm-software-development-solutions"><a>ERP & CRM Solutions</a></Link></li>
                                  <li><Link href="/custom-website-development-companies-mumbai-india"><a>Custom Web Development</a></Link></li>
                                  <li><Link href="/cms-development-companies-mumbai-india"><a>CMS Development Services</a></Link></li>
                                  <li><Link href="/magento-development-services-mumbai-india"><a>Magento Development</a></Link></li>
                                  <li><Link href="/drupal-cms-framework-development-services"><a>Drupal Development</a></Link></li>
                                  <li><Link href="/wordpress-cms-website-development-companies-mumbai-india"><a>WordPress Experts</a></Link></li>
                                  <li><Link href="/joomla-cms-framework-development-services"><a>Joomla Development</a></Link></li>
                                  <li><Link href="/webportal-development-companies-mumbai-india"><a>Web Portal Development</a></Link></li>
                                  <li><Link href="/ecommerce-solutions-company-mumbai-india"><a>E-Commerce Solutions</a></Link></li>
                                  </ul>
                              </div>
                              </div>
                              <div className="col-lg-3">
                              <div className="footerColumn">
                                  <h4>Website Designing</h4>
                                  <ul>
                                  <li><Link href="/cms-website-design-development-services"><a>CMS Based Website</a></Link></li>
                                  <li><Link href="/dynamic-website-designing-services"><a>Dynamic Website Designing</a></Link></li>
                                  <li><Link href="/website-maintenance-services"><a>Website Maintenance</a></Link></li>
                                  <li><Link href="/website-redesigning-services"><a>Website Redesigning</a></Link></li>
                                  <li><Link href="/mobile-website-designing-services"><a>Mobile Website Designing</a></Link></li>
                                  <li><Link href="/corporate-website-designing-services"><a>Corporate Web Designing</a></Link></li>
                                  <li><Link href="/website-audit-services-mumbai-india"><a>Website Audit Report</a></Link></li>
                                  <li><Link href="/xhtml-conversion-services"><a>XHTML Conversion</a></Link></li>
                                  </ul>
                              </div>
                              </div>
                              <div className="col-lg-3">
                              <div className="footerColumn">
                                  <h4>PPC Management</h4>
                                  <ul>
                                  <li><Link href="/google-ads-management-services"><a>Google Ads Management</a></Link></li>
                                  <li><Link href="/linkedin-ads-management-services"><a>Linkedin Ads Management</a></Link></li>
                                  <li><Link href="/instagram-ads-management-services"><a>Instagram Ads Management</a></Link></li>
                                  <li><Link href="/facebook-ads-management-services"><a>Facebook Ads Management</a></Link></li>
                                  </ul>
                              </div>
                              </div>
                          </div>
                          </div>
                      </div>
                      <div className="col-lg-1">
                          <div className="socialColumn">
                          <ul>
                              <li><Link href="https://www.facebook.com/sibinfotech/"><a target="_blank"><i className="fab fa-facebook-f"></i></a></Link></li>
                              <li><Link href="https://www.twitter.com/sibinfotech"><a target="_blank"><i className="fab fa-twitter"></i></a></Link></li>
                              <li><Link href="https://www.linkedin.com/company/sib-infotech/"><a target="_blank"><i className="fab fa-linkedin-in"></i></a></Link></li>
                              <li><Link href="https://www.youtube.com/user/sibinfotech"><a target="_blank"><i className="fab fa-youtube"></i></a></Link></li>
                          </ul>
                          </div>
                      </div>
                      </div>
                  </div>
                  </div>
              </div>
              <section className="mapBlock py-5">
                  <div className="containerFull">
                      <div className="row">
                          <div className="col-lg-6">
                              <div className="mapItem">
                                  <div className="leftImgMap">
                                      <picture>
                                          <source srcSet="assets/images/mumbai-office.webp" type="image/webp"/>
                                          <img src="assets/images/mumbai-office.jpg" className="img-fluid" alt="Mumbai Office"/>
                                      </picture>
                                      <div className="officeAddress">
                                          <h4 className="small_heading fontWeight600">Mumbai Office</h4>
                                          <p>107, Orbit Premises, Mindspace Near Inorbit Mall, Malad West, Mumbai, Maharashtra 400064</p>
                                          <Link href="tel:+91-92222-60000"><a><i className="fa fa-phone"></i>&nbsp; +91-92222-60000</a></Link>
                                      </div>
                                  </div>
                                  <div className="rightMapItem">
                                      <iframe className="img-taken"
                                          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15073.646558593871!2d72.833803!3d19.177215!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce92f56b4ccd%3A0x965180085bc69862!2sSIB%20Infotech!5e0!3m2!1sen!2sin!4v1678696876200!5m2!1sen!2sin"
                                          allowFullScreen=""
                                          loading="lazy"
                                          title="Mumbai Office Map"
                                          referrerPolicy="no-referrer-when-downgrade">
                                      </iframe>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-6">
                              <div className="mapItem">
                                  <div className="leftImgMap">
                                      <picture>
                                          <source srcSet="assets/images/delhi-office.webp" type="image/webp"/>
                                          <img src="assets/images/delhi-office.jpg" className="img-fluid" alt="Delhi Office"/>
                                      </picture>
                                      <div className="officeAddress">
                                          <h4 className="small_heading fontWeight600">Delhi Office</h4>
                                          <p>2nd Floor, Office No 205, DDA-2 Building, Janakpuri District Center, Janakpuri, New Delhi, Delhi 110058</p>
                                          <Link href="tel:+91-92222-60000"><a><i className="fa fa-phone"></i>&nbsp; +91-92222-60000</a></Link>
                                      </div>
                                  </div>
                                  <div className="rightMapItem">
                                      {/* <iframe className="img-taken"
                                          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14007.962243140857!2d77.081604!3d28.630045!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05e1990aeceb%3A0x7e39edabda3510f5!2sSIB%20Infotech!5e0!3m2!1sen!2sin!4v1678696653308!5m2!1sen!2sin"
                                          allowFullScreen=""
                                          loading="lazy"
                                          title="Delhi Office Map"
                                          referrerPolicy="no-referrer-when-downgrade">
                                      </iframe> */}
                                      <iframe title="Delhi Office Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9866641582603!2d77.0791146745727!3d28.630161784190033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05e1990aeceb%3A0x7e39edabda3510f5!2sSIB%20Infotech!5e0!3m2!1sen!2sin!4v1709614692297!5m2!1sen!2sin" width="600" height="450" style={{border:'0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              <div className="footerBottom">
                  <div className="containerFull">
                  <div className="footerLogos">
                      <div className="itemFooterLogo">
                          <a href="https://www.google.com/partners/agency?id=4328223643" rel="noreferrer" target="_blank">
                              <img src="https://www.gstatic.com/partners/badge/images/2024/PremierBadgeClickable.svg" alt="Google Partner"/>
                          </a>
                      </div>
                      <div className="itemFooterLogo">
                      <img alt="Meta Partner Company" src="assets/images/meta-partner.jpg"/>
                      </div>
                      <div className="itemFooterLogo">
                      <img alt="clutch Partner Company" src="assets/images/clutch.png"/>
                      </div>
                      <div className="itemFooterLogo">
                      <img alt="Shopify Partner Company" src="assets/images/shopify-partner.png"/>
                      </div>
                      <div className="itemFooterLogo">
                      <img alt="Trustpilot Partner Company" src="assets/images/trustpilot.jpg"/>
                      </div>
                      <div className="itemFooterLogo">
                      <img alt="Google Analytics Partner Company" src="assets/images/google-analytics.jpg"/>
                      </div>
                      <div className="itemFooterLogo">
                      <img alt="Bing Partner Company" src="assets/images/bing.png"/>
                      </div>
                  </div>
                  <div className="text-center mt-2 countryCenter">
                      <p>Serving Clients from : USA, UK, Australia, Canada, Europe, Germany, Singapore, Portugal, Belgium, Netherlands, Turkey, New Zealand, Japan & more</p>
                  </div>
                  <div className="footer_copyright d-flex mb-2 align-items-center justify-content-between">
                      <div className="rightFooterBottom">
                          <ul>
                              <li><Link href="#"><a>Clients</a></Link></li>
                              <li><Link href="/career"><a>Career</a></Link></li>
                              <li><Link href="/blogs"><a>Blog</a></Link></li>
                              <li><Link href="/privacy-policy"><a>Privacy Policy</a></Link></li>
                              <li><Link href="/sitemap.xml"><a>Sitemap</a></Link></li>
                              <li><Link href="/terms-and-conditions"><a>Terms of Use</a></Link></li>
                              <li><Link href="/cookie-policy"><a>Cookies Policy</a></Link></li>
                              <li><Link href="#"><a>SEO Tools</a></Link></li>
                              <li><Link href="/resource"><a>Resources</a></Link></li>
                              <li><Link href="/contact-us"><a>Contact Us</a></Link></li>
                          </ul>
                      </div>
                      <div className="copyRightFooter">
                          <p>© {(new Date().getFullYear())}. SIB Infotech. All Rights Reserved.</p>
                      </div>
                  </div>
                  </div>
              </div>
          </footer>
      </div>
    )
}
