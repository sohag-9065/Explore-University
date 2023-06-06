 /* eslint-disable react/prop-types */
import coursesData from '../../data/courseData';
import CourseCard from './CourseCard';

const CourseItems = ({ limit }) => {

    const len = coursesData.length;
    let courses = coursesData.slice(0, len);

    if (limit > 0) {
        courses = coursesData.slice(0, limit);
    } 
    return (
        <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 '>
        {
            courses.map((course, index) => <CourseCard
                key={index}
                course={course}
            ></CourseCard>)
        }
    </div>
    );
};

export default CourseItems;