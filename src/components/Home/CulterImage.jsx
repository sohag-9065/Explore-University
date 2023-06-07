/* eslint-disable react/prop-types */

import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Image } from 'react-fullscreen-image'
import { PhotoProvider, PhotoView } from 'react-photo-view';

const CulterImage = ({ img }) => {
    const [icon, setIcon] = useState(false);

    function showIcon() {
        setIcon(true);
    }
    function hideIcon() {
        setIcon(false);
    }
    return (
        <div className='relative cursor-zoom-in' onMouseEnter={showIcon} onMouseLeave={hideIcon}>
            <PhotoProvider>
                <div className="foo">
                    <PhotoView src={img}>
                        <img src={img} alt="" className=' w-full' />
                    </PhotoView>
                </div>
            </PhotoProvider>
            {
                icon && <p className='absolute    flex justify-center items-center left-[50%] -ml-5 top-[50%] -mt-5   bg-secondary h-10 w-10  '>
                    <FontAwesomeIcon icon={faInstagram} />
                </p>
            }
        </div>
    );
};

export default CulterImage;