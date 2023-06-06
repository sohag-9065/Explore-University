/* eslint-disable react/prop-types */

import blogsData from '../../data/blogsData';
import BannerNav from '../shared/BannerNav'; 
import BlogItems from './BlogItems';

const Blog = ({ limit }) => {

    const len = blogsData.length;
    let blogs = blogsData.slice(0, len);

    if (limit > 0) {
        blogs = blogsData.slice(0, limit);
    }

    console.log(limit);
    console.log(blogs);

    return (
        <div>
            <BannerNav title={"Our Blogs"} tag={"Blog"} />
            <div className='py-28 bg-[#FAFAFA]'>
                <BlogItems />
            </div>

        </div>
    );
};

export default Blog;