/* eslint-disable react/prop-types */

import { faFacebookF, faGooglePlusG, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const StaffCard = ({ staff }) => {
    const { title, img, courseTeacher, description } = staff;

    const [textColor, setTextColor] = useState("");

    const [social, setSocial] = useState(false);

    const onMouseOverHover = () => {

        setTextColor("text-secondary");
        setSocial(true);
    }

    const onMouseLeaveHover = () => {
        setTextColor("text-black")
        setSocial(false);
    }

    return (
        <div className="text-center" onMouseOver={onMouseOverHover} onMouseLeave={onMouseLeaveHover}>

            <div className="relative">
                <img src={img} alt="" className=" " />
                <div className={`  ${social ? "transition-all duration-1000 ease-in-out " : " hidden"} absolute bottom-6 left-[50%] -mx-[62px] flex text-secondary gap-4 justify-center items-center  font-bold text-xl`}>
                    <p>
                        <FontAwesomeIcon icon={faTwitter} />
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faFacebookF} />
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faGooglePlusG} />
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faInstagram} />
                    </p>
                </div>
            </div>
            <h3 className={`text-2xl    font-bold pt-6 ${textColor}`}>{courseTeacher}</h3>

            <h4 className="text-secondary pt-2">{title}</h4>
            <p className="pt-2 text-gray" >{description}</p>

        </div>
    );
};

export default StaffCard;