/* eslint-disable react/prop-types */
import staffsData from '../../data/staffsData';
import StaffCard from './StaffCard';


const Staff = ({ limit }) => {

    const len = staffsData.length;
    let staffs = staffsData.slice(0, len);

    if (limit > 0) {
        staffs = staffsData.slice(0, limit);
    }
  
    return (
        <div className='py-28 px-8 bg-[#FAFAFA]'>
            <h1 className='text-4xl mb-12 text-center font-extrabold'>Certified Teachers</h1>
            <p className='text-center mb-20 text-[#666666]'> Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
            <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 '>
                {
                    staffs.map((staff, index) => <StaffCard
                        key={index}
                        staff={staff}
                    ></StaffCard>)
                }
            </div>
        </div>
    );
};

export default Staff;