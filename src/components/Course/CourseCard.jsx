/* eslint-disable react/prop-types */
import { faCalendarDays, faTable, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

 
const CourseCard = ({course}) => {
    const {title, img, courseTeacher, seat, duration,  description} = course;
     
    return (
        <div>
            <img src={img} alt="" className=" h-[300px] w-full"/>
            <div className="grid grid-cols-3 py-6 text-xs">
                <p>
                    <FontAwesomeIcon icon={faUser} className="text-secondary"/>
                    <span className="pl-2 text-gray">{courseTeacher}</span>
                </p>
                <p>
                    <FontAwesomeIcon icon={faTable} className="text-secondary"/>
                    <span className="pl-2 text-gray" >{seat} SEATS</span>
                </p>
                <p>
                    <FontAwesomeIcon icon={faCalendarDays} className="text-secondary"/>
                    <span className="pl-2 text-gray">{duration} YEARS</span>
                </p>
            </div>
            <h3 className="text-2xl font-bold pb-6">{title}</h3>
            <p className="text-gray mb-6">{description}</p>
            <button className="bg-secondary text-white px-3 py-2 rounded-full">Apply now</button>
        </div>
    );
};

export default CourseCard;