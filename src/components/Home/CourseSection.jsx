import CourseItems from '../Course/CourseItems';

const CourseSection = () => {
    return (
        <div className='py-28 px-8 z-20'>
            <h1 className='text-4xl mb-12 text-center font-extrabold'>Our Courses</h1>
            <p className='text-center mb-20 text-[#666666]'> Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
            <CourseItems limit={4} />
        </div>
    );
};

export default CourseSection;