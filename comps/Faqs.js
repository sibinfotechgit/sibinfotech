import React, { useState } from 'react';
export default function Faqs() {
    const [activeIndex, setActiveIndex] = useState(null);
    const handleItemClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const faqData  = [
        {
            question: "What are the different types of SEO Services we offer?",
            answer: "<div class='innerContentFaq'><h4 class='small_heading fontWeight700'>There are six primary types of SEO</h4><p class='mt-4'><strong>Technical SEO: </strong> This ensures that a search engine can crawl, explore and read your website with no issues. This requires setting up a robot.txt file, creating an XML sitemap, and fixing crawl issues. Website speed and mobile responsiveness are also key factors in technical SEO.</p></div><div class='innerContentFaq'><p><strong>On-Page SEO: </strong> It is mandatory to optimize every separate page as search engines rank individual pages. A well-structured page, titles, and heading tags optimized with targeted keywords, descriptive URLs aid good on-page optimization.</p></div><div class='innerContentFaq'><p><strong>Content SEO: </strong> While most people consider content optimization and On-Page SEO the same, there is a slight difference in its relevance as a ranking factor. Content on a website should be optimized to aid a visitor's journey to conversion.</p></div><div class='innerContentFaq'><p><strong>Off-Page SEO: </strong> It is mandatory to optimize every separate page as search engines rank individual pages. A well-structured page, titles, and heading tags optimized with targeted keywords, descriptive URLs aid good on-page optimization.</p></div><div class='innerContentFaq'><p><strong>Mobile SEO: </strong> As per research, 50% of Internet users make searches and surf websites on mobile devices. We are already familiar with the usefulness of search engine optimization for website ranking and Mobile SEO means search engine optimization with hassle-free surfing on mobile devices. For serving a better experience to its users, Google is already favoring mobile-friendly sites.</p></div><div className='class'><p><strong>E-Commerce SEO: </strong> The range or amount of traffic on your online store depends on the ranks on the Search Engine Results Page (SERPs). Hence, your approach is constantly to rank high as possible. You can get traffic from paid search but E-Commerce SEO is a cost-effective technique.</p></div>",
        },
        {
            question: "What makes SIB Infotech a Top-Rated SEO Agency?",
            answer: "<p>SIB Infotech is a Top SEO Company in India offering unmatched SEO services at an economical cost. We are savvy in the art of Search Engine Optimisation (SEO) from years of practice and can meet your Internet Marketing and SEO objectives within time and with our cost-effective approaches. Our SEO Services in India is tailored to meet client needs. You can choose from several SEO Packages depending upon your requirements or contact us for a custom quote.</p>",
        },
        {
            question: "Why SEO is important?",
            answer: "<div class='innerContentFaq'><p>The majority spend most of their time on SERPs searching for some of their inquires. They are most likely to click on one of the leading 5 suggestions on the search engine results page. Apart from this, there are numerous reasons every business needs to invest in SEO. We have discussed some reasons below:</p><p>SEO helps businesses connect with users actively seeking them. These users that visit your website through Google search results are the most valuable kind of website visitors since they have a high intent to purchase from you.</p><ol><li>SEO aids increase in the quantity of relevant traffic.</li><li>Organic SEO builds trust and credibility in your brand.</li><li>SEO Services are a lot less expensive than paid advertising.</li><li>SEO is low maintenance i.e. once you achieve organic ranking for your target keywords it's simple to manage them and pull in consistent traffic every month.</li><li>SEO Marketing, if done right, delivers a high ROI compared to all diverse forms of Digital Marketing.</li></ol></div>",
        },
        {
            question: "Does Digital Marketing increase sales?",
            answer: "<div class='innerContetnFaq'><p>Yes, online sales can be doubled with the proper Digital Marketing programs. From the right Digital Marketing strategies, we mean Paid Advertising, Content Marketing, Branding, Website Optimization, and Local SEO.</p></div>",
        },
        {
            question: "Can you help to recover Websites from Google Penalties?",
            answer: "<div class='innerContetnFaq'><p>Recovering from Google Penalties is a long and laborious process. However, we have acquired an approach to analyze and overcome the numerous penalties Google may commit to a website. We adopt the freshest information while retaining the brand messaging in the content.</p></div>",
        }
    ];
  return (
    <div>
     {faqData.map((faq, index) => (
        <div key={index} className="faq-item">
          <div
            className={`faq-question ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleItemClick(index)}
          >
            <h5>{faq.question}</h5>
            <div className="iconPlusHome"><i className="fa fa-plus"></i><i className="fa fa-minus"></i></div>
          </div>
          {activeIndex === index && <div className="contentFaq" dangerouslySetInnerHTML={{ __html: faq.answer }} />}
        </div>
      ))}
    </div>
  )
}
