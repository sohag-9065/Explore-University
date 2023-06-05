/* eslint-disable react/prop-types */
import coursesData from '../../data/courseData';
import CourseCard from './CourseCard';

const Course = ({ limit }) => {

    const len = coursesData.length;
    let courses = coursesData.slice(0, len);

    if (limit > 0) {
        courses = coursesData.slice(0, limit);
    } 

    return (
        <div className='py-28 px-8'>
            <h1 className='text-4xl mb-12 text-center font-extrabold'>Our Courses</h1>
            <p className='text-center mb-20 text-[#666666]'> Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
            <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 '>
                {
                    courses.map((course, index) => <CourseCard
                        key={index}
                        course={course}
                    ></CourseCard>)
                }
            </div>
        </div>
    );
};

export default Course;