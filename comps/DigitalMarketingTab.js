import React, { useState } from 'react';
import Link from 'next/link'


export default function DigitalMarketingTab() {
    const [tabDats, setTabData] = useState(
      {
        tabnumbers:1,
        title: "Search Engine Optimization",
        title2: "SIB Infotech <span class='text_red'>SEO Services In India</span> - Trusted By Over 1000+ Companies",
        image: "assets/images/seo-tab.jpg",
        content: "<p class='mt-3'>SEO is the most efficient and effective method increase your search engine visibility and drive traffic to your website. With our SEO services we can help you get top ranking on major search engines (Google, yahoo, Bing) using our propertiory techniques developed with years of experience using white hat SEO practices and bringing an increase in organic search engine ranking.</p>",
        url: "/search-engine-optimization-seo-services",
      }
    );
    const tabsData = [
      {
        tabnumbers:2,
        title: "Search Engine Optimization",
        title2: "SIB Infotech <span class='text_red'>SEO Services In India</span> - Trusted By Over 1000+ Companies",
        image: "assets/images/seo-tab.jpg",
        content: "<p class='mt-3'>SEO is the most efficient and effective method increase your search engine visibility and drive traffic to your website. With our SEO services we can help you get top ranking on major search engines (Google, yahoo, Bing) using our propertiory techniques developed with years of experience using white hat SEO practices and bringing an increase in organic search engine ranking.</p>",
        url: "/search-engine-optimization-seo-services",
      },
      {
        tabnumbers:3,
        title: "Social Media Optimization",
        title2: "Top Rated <span class='text_red'>SEO Company in India</span>",
        image: "assets/images/smo-tab.jpg",
        content: "<p class='mt-3'>Affiliate Marketing is the term used to describe a form of online advertising which consists of rewarding an affiliate for referring a visitor or rewarding a customer for performing a desired action, such as making a purchase or subscribing to a newsletter. In a way, Affiliate Marketing can be regarded as free publicity for your page—a network of related websites directing customers to purchase from yours</p> <p class='mt-2'>Affiliate campaigns have the best results when they are combined with Search Engine Optimization (SEO), Pay Per Click (PPC) campaigns, email marketing support and are well-suited for travel, retail, and service industries due to their timely research process/large-volume sales.</p>",
        url: "/social-media-optimization-services",
      },
      {
        tabnumbers:4,
        title: "Content Marketing",
        title2: "Tell your <span class='text_red'>Brand Story</span> Better, <span class='text_red'>Engage better</span> with your Audience",
        image: "assets/images/content-tab.jpg",
        content: "<p class='mt-3'>Affiliate Marketing is the term used to describe a form of online advertising which consists of rewarding an affiliate for referring a visitor or rewarding a customer for performing a desired action, such as making a purchase or subscribing to a newsletter. In a way, Affiliate Marketing can be regarded as free publicity for your page—a network of related websites directing customers to purchase from yours</p> <p class='mt-2'>Affiliate campaigns have the best results when they are combined with Search Engine Optimization (SEO), Pay Per Click (PPC) campaigns, email marketing support and are well-suited for travel, retail, and service industries due to their timely research process/large-volume sales.</p>",
        url: "/content-marketing-services",
      },
      {
        tabnumbers:5,
        title: "PPC Management Services",
        title2: "SIB Infotech is an innovative  <span class='text_red'>PPC management company</span>",
        image: "assets/images/ppc-tab.jpg",
        content: "<p class='mt-3'>SIB Infotech is an innovative digital marketing, AdWords management, remarketing and PPC management company with proven track record to take your PPC campaigns to the next level and provide you with integrated, adverting and marketing solution.</p><p class='mt-2'>Pay-per-click(PPC) advertising allows you to reach your target customers searching for your products and services online by using target keywords.</p><p class='mt-2'>Pay per click represent a model of internet marketing where an advertiser run an ad and he will get charged if there will be a click on his ad. Advertiser pay a fees every time on his ad whenever he will get clicked. The most popular type of pay per click ad is search engine advertisement.</p>",
        url: "/pay-per-click-ppc-management-services",
      }
    ]
  return (
    <div>
        <div className="row">
            <div className="col-lg-3 pe-lg-0">
              <div className="marketingTabs">
                <ul>
                  {tabsData.map((val, id) => {
                    return(
                        <li key={id} onClick={() => {setTabData({ title: val.title, title2: val.title2, image: val.image, content: val.content, url: val.url});}}> {val.title}</li>
                    )
                  })}
                </ul>
              </div>
            </div>
            <div className="col-lg-9 ps-lg-0">
              <div className="rightTab">
                <div className="itemTabHome" id="seo">
                  <div className="row">
                    <div className="col-lg-5">
                      <div className="tabImg">
                        <img src={tabDats.image} alt="SEO"/>
                      </div>
                    </div>
                    <div className="col-lg-7 ps-lg-4">
                      <h4 className="sub_heading2 fontWeight700">{tabDats.title}</h4>
                      <p className="small_heading fontWeight500 mt-2"  dangerouslySetInnerHTML={{__html: tabDats.title2}}></p>
                      <div  dangerouslySetInnerHTML={{__html: tabDats.content}}></div>
                      <Link href={tabDats.url}><a className="btnLink">Learn More <i className="bi bi-arrow-right"></i></a></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}
