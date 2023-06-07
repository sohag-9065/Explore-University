/* eslint-disable react/prop-types */

import { faArrowRight, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

 
const BlogCart = ({ blog }) => {
    const { title, img, day, month, year, description } = blog;

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="relative">
                <img src={img} alt="" className="  " />
                <div className="absolute bottom-0 bg-fifth text-white w-12 text-center p-2">
                    <p className="text-2xl font-bold">{day}</p>
                    <p>{month}</p>
                    <p>{year}</p>
                </div>
            </div>
             <div className="p-6 bg-white">
                <h3 className="text-xl pb-4">{title}</h3>
                <p className="text-gray pb-8">{description}</p>
                <div className="flex justify-between items-center">
                    <p className="bg-secondary outline-1 border-[1px] border-secondary hover:bg-inherit px-3 py-2 rounded-full text-white hover:text-secondary">
                        <span>Read More</span>
                        <FontAwesomeIcon icon={faArrowRight} className="pl-1 text-xs"/>
                    </p>
                    <p>
                        <span className="text-secondary pr-3">Admin</span>
                        <FontAwesomeIcon icon={faMessage} className="text-gray/[.5]"/>
                        <span className="text-gray/[.5] pl-1">3</span>
                    </p>
                </div>
             </div>
        </div>
    );
};

export default BlogCart;