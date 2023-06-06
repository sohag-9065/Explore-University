import BannerNav from '../shared/BannerNav';
import CourseItems from './CourseItems';

const Course = ( ) => {

    return (
        <div>
            <BannerNav title={"Courses"} tag={"COURSES"} />
            <div className='py-28 px-8'>
                <CourseItems />
            </div>
        </div>
    );
};

export default Course;