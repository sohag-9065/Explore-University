import BannerNav from '../shared/BannerNav'; 
import BlogItems from './BlogItems';

const Blog = () => { 

    return (
        <div>
            <BannerNav title={"Our Blogs"} tag={"Blog"} />
            <div className='py-28 px-8 bg-[#FAFAFA]'>
                <BlogItems />
            </div>

        </div>
    );
};

export default Blog;