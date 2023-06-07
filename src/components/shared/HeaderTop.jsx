import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const HeaderTop = () => {
    return (
        <div className="grid  md:grid-cols-3 gap-5 px-4 sm:px-16 md:px-6  py-6 ">
            <div className="text-third font-extrabold  sm:pb-7 md:pb-0 leading-4">
                <p><Link to='/' className=" text-[44px] leading-10">FOX.</Link></p>
                <span className=" pl-[2px]">UNIVERSITY</span>
            </div>
            <div className="col-span-2 grid gap-3  sm:grid-cols-3 ">
                <div className="flex items-center">
                    <FontAwesomeIcon
                        icon={faPaperPlane}
                        className="text-secondary"
                    />
                    <div className="pl-3">
                        <p className="font-bold text-third ">Email</p>
                        <p className="text-black/[.7] ">youremail@email.com</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <FontAwesomeIcon
                        icon={faPhone}
                        className="text-secondary "
                    />
                    <div className="pl-3">
                        <p className="font-bold text-third ">Call</p>
                        <p className="text-black/[.7] ">Call Us: + 1235 2355 98</p>
                    </div>
                </div>
                <div className="flex justify-end items-center text-white">
                     <p className="border-[1px] border-secondary bg-secondary py-2 px-4 text-xl leading-6 hover:bg-inherit hover:text-secondary
                     ">Apply now</p>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;