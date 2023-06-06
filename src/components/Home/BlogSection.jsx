import BlogItems from '../Blog/BlogItems';

const BlogSection = () => {
    return (
        <div className='py-28 px-8 bg-[#FAFAFA]'>
            <h1 className='text-4xl mb-12 text-center font-extrabold'>Recent Blog</h1>
            <p className='text-center mb-20 text-[#666666]'> Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p> 
            <BlogItems limit={3} />
        </div>
    );
};

export default BlogSection;