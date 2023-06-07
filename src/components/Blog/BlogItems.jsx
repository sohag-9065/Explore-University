/* eslint-disable react/prop-types */
import blogsData from '../../data/blogsData';
import BlogCart from './BlogCart';

const BlogItems = ({limit}) => {
    const len = blogsData.length;
    let blogs = blogsData.slice(0, len);

    if (limit > 0) {
        blogs = blogsData.slice(0, limit);
    }


    return (
        <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1140px]   mx-auto '>
                {
                    blogs.map((blog, index) => <BlogCart
                        key={index}
                        blog={blog}
                    ></BlogCart>)
                }
            </div>
    );
};

export default BlogItems;