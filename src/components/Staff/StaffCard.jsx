/* eslint-disable react/prop-types */

import { useState } from "react";

const StaffCard = ({ staff }) => {
    const { title, img, courseTeacher, description } = staff;

    const [ textColor , setTextColor] = useState("")

    return (
        <div className="text-center" onMouseOver={() => setTextColor("text-secondary") } onMouseLeave={() => setTextColor("text-black")}> 

            <img src={img} alt="" className=" " />
            <h3 className={`text-2xl   font-bold pt-6 ${textColor}`}>{courseTeacher}</h3>

            <h4 className="text-secondary pt-2">{title}</h4>
            <p className="pt-2 text-gray" >{description}</p>
        </div>
    );
};

export default StaffCard;