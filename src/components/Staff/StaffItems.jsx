/* eslint-disable react/prop-types */
import staffsData from '../../data/staffsData';
import StaffCard from './StaffCard';

const StaffItems = ({ limit }) => {

    const len = staffsData.length;
    let staffs = staffsData.slice(0, len);

    if (limit > 0) {
        staffs = staffsData.slice(0, limit);
    }

    return (
        <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 '>
                {
                    staffs.map((staff, index) => <StaffCard
                        key={index}
                        staff={staff}
                    ></StaffCard>)
                }
            </div>
    );
};
export default StaffItems;