import Link from 'next/link';
import * as CONSTANTS from "../constants/constants";
// import { compareAsc, format } from 'date-fns'

function BlogCard(props) {

    const {blog} = props;

    return (
      <Link href={"/blogs/"+blog.slug}>
          <a><div className="blogItems">
            <div className="blogImg">
                <img src={`${CONSTANTS.BACKEND_URL+blog.image}`} className="img-fluid" alt={blog.image_alt}/>
            </div>
            <div className="dividerBlog"></div>
            <div className="blogTitle">
                <h4 className="small_heading fontHeading fontWeight600">{blog.name}</h4>
                <div className="dateTime">
                  <p>{blog.bdate}</p>
                  <button className="blogIcon"><i className="fa fa-chevron-right"></i></button>
                </div>
            </div>
          </div></a>
      </Link>
    );
}

export default BlogCard;
