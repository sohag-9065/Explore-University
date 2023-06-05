/* eslint-disable react/prop-types */ 

const StaffCard = ({ staff }) => {
    const { title, img, courseTeacher, description } = staff;

    return (
        <div className="text-center">
            <div>
                <img src={img} alt="" className=" " />
                <h3 className="text-2xl font-bold pt-6 ">{courseTeacher}</h3>
            </div>
             <h4 className="text-secondary pt-2">{title}</h4>
             <p className="pt-2 text-gray" >{description}</p>
        </div>
    );
};

export default StaffCard;