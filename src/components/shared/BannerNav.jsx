/* eslint-disable react/prop-types */
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { Link } from 'react-router-dom';

const BannerNav = ({title, tag}) => {
    return (
        <div className="relative bg-contactBg bg-cover bg-center    h-[300px] flex justify-center items-center">
                <div className="absolute top-0 bottom-0 left-0 right-0 opacity-30 bg-[#f1453d]"></div>
                <div className="   ">
                    <h2 className="text-5xl font-extrabold text-white backdrop-contrast-100 opacity-100" >{title}</h2>
                    <div className=" flex justify-center text-white backdrop-contrast-100 opacity-100 pt-5">
                        <div className="flex justify-center items-center  ">
                            <span className="border-b-2 border-white/[.2]  text-sm">
                                <Link to='/'>HOME</Link>
                                <FontAwesomeIcon icon={faGreaterThan} className="pl-2" />
                            </span>
                        </div>
                        <div className="flex justify-center items-center pl-6  text-sm">
                            <span className="border-b-2 border-white/[.2]">
                                <Link >{tag}</Link>
                                <FontAwesomeIcon icon={faGreaterThan} className="pl-2  " />
                            </span>
                        </div>
                    </div>
                </div>

            </div>
    );
};

export default BannerNav;