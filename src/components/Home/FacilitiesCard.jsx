/* eslint-disable react/prop-types */
 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

  
const FacilitiesCard = ({facility}) => {  
    const {title, logo, bgColor, description} = facility;

    return (
        <div  className={`${bgColor} flex flex-col justify-center items-center px-6 py-12 text-white`}>
            <FontAwesomeIcon icon={logo} className="h-12 w-12"/> 
            <h1 className="mt-3  mb-2 p-2 text-3xl">{title}</h1>
            <p className="text-center mb-3">{description}</p>
        </div>
    );
};

export default FacilitiesCard;