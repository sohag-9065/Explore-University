
import BannerNav from '../shared/BannerNav';
import StaffItems from './StaffItems';

const Staff = () => {
    return (
        <div>
            <BannerNav title={"Certified Teacher"} tag={"TEACHER"} />
            <div className=' py-28 px-8'>
                <StaffItems />
            </div>
        </div>
    );
};

export default Staff;