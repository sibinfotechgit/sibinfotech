import React, { useState } from 'react';
import Link from 'next/link';

export default function HomeBlog() {
    const [activeIndex, setActiveIndex] = useState(null);
    const handleItemClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const blogData  = [
        {
            title: "What Is DuckDuckGo SEO And How To Optimize The Website",
            content: "In the present time, every other website is in the long run of being discovered by the users, optimizing their websites for the search engines to grow organic traffic and giving the audience what they want and expect. Google, Bing, Yahoo are the most popular search engines where a lot of people optimize their websites but there are many small search engines like DuckDuckGo which are undoubtedly evolving rapidly since the time they started their operations.",
            url: "#",
        },
        {
            title: "Clutch Hails SIB Infotech as India Leading PPC Management Company for 2022",
            content: "Headquartered in Mumbai, India, SIB Infotech is a versatile and experienced solutions provider committed to providing cost-effective services to companies of all sizes. Since our inception, we’ve made it our goal to lead the way for innovation and offer ingenious technologies. We want to serve as your trusted partner in these fast-paced markets.",
            url: "#",
        },
        {
            title: "Reasons Why Your Website Not Ranking On Google And How To Fix It",
            content: "Downfall or steadiness in the rankings of search engine keywords is quite common for web pages. The solution for this is not to focus on why your website is not ranking on Google instead analyze expert tactics on how to rank a website on search engine results pages.",
            url: "#",
        },
        {
            title: "Google Launches Product Reviews Algorithm Update",
            content: "When we buy something, reviews are the very first thing we look forward to while choosing the right product. This time Google has made it easier for us by announcing the product reviews algorithm update. Known as the product reviews update Google has announced a new quality algorithm update that promotes outstanding product reviews. In this update, the reviews which will have a detailed explanation with insightful analysis and original research will be rewarded better rather than the thin contents with less relevant information. In short, reviews provided by some experts or professionals who know the topic well will be more emphasized.",
            url: "#",
        },
        {
            title: "Yelp Introduces New Search Filter For Asian-Owned Business Profile",
            content: "Known as a social media platform that rates and reviews local businesses Yelp devotes its pages to restaurants, schools, and local businesses where the users submit their reviews and ratings about that business. With a 130% YoY increase in Yelp searches for Asian-owned businesses yelp has incorporated business profile attributes for the local businesses using this platform. This attribute is available free of charge enables businesses to get identified easily.",
            url: "#",
        }
    ];
  return (
    <div className="mt-4">
      {blogData.map((blog, index) => (
        <div key={index}>
          <div
            className={`itemBlogHome ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleItemClick(index)}
          >
            <h5 className="small_heading fontWeight700">{blog.title}</h5>
          {activeIndex === index && <div className="leftSpace"> <div className="blogContent" dangerouslySetInnerHTML={{ __html: blog.content }}/><Link href={blog.url}><a className="btnLink">Read More  <i className="bi bi-arrow-right"></i></a></Link></div>}
          </div>
        </div>
      ))}
    </div>
  )
}
