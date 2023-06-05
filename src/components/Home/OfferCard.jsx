/* eslint-disable react/prop-types */ 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

const OfferCard = ({offer}) => {
    const {title, logo, description, bgColor} = offer;
    return (
        <div className='flex pr-4 '>
            <div >
                <FontAwesomeIcon icon={logo} className={`${bgColor} w-6 h-6 p-6 text-white rounded-full `}/>
            </div>
            <div className='pl-4'>
                <h2 className='text-xl mb-2'>{title}</h2>
                <p className='text-[#666666] '>{description}</p>
            </div>
        </div>
    );
};

export default OfferCard;