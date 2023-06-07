import StaffItems from "../Staff/StaffItems";


const StaffSection = () => {

    return (
        <div className='py-28 px-8 bg-[#FAFAFA]'>
            <h1 className='text-2xl md:text-5xl  mb-12 text-center font-extrabold'>Certified Teachers</h1>
            <p className='text-center mb-20 text-[#666666]'> Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
            
            <StaffItems limit={4} />
        </div>
    );
};

export default StaffSection;