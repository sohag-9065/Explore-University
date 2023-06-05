/* eslint-disable react/prop-types */
 
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Image } from 'react-fullscreen-image'

const CulterImage = ({ i }) => {
    const [icon, setIcon] = useState(false);

    function showIcon() {
        setIcon(true);
    }
    function hideIcon() {
        setIcon(false);
    }
    return ( 
        <li key={i} className='relative ' onMouseEnter={showIcon} onMouseLeave={hideIcon}>
            <Image src={i} alt="mountains" />
            {
                icon && <p className='absolute  -z-10  flex justify-center items-center left-[50%] -ml-5 top-[50%] -mt-5   bg-secondary h-10 w-10  '> 
                <FontAwesomeIcon icon={faInstagram} />
                </p>
            }
        </li>
    );
};

export default CulterImage;