/* eslint-disable react/prop-types */
 
import blogsData from '../../data/blogsData';
import BlogCart from './BlogCart';

const Blog = ({ limit }) => {

    const len = blogsData.length;
    let blogs = blogsData.slice(0, len);

    if (limit > 0) {
        blogs = blogsData.slice(0, limit);
    }

    console.log(limit);
    console.log(blogs);

    return (
        <div className='py-28 px-8 bg-[#FAFAFA]'>
            <h1 className='text-4xl mb-12 text-center font-extrabold'>Certified Teachers</h1>
            <p className='text-center mb-20 text-[#666666]'> Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
            <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1100px]   mx-auto '>
                {
                    blogs.map((blog, index) => <BlogCart
                        key={index}
                        blog={blog}
                    ></BlogCart>)
                }
            </div>
        </div>
    );
};

export default Blog;