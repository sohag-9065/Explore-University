import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faPhone } from "@fortawesome/free-solid-svg-icons";

const HeaderTop = () => {
    return (
        <div className="grid md:grid-cols-3 gap-5  p-6 md:px-0">
            <div className="text-third font-extrabold  leading-4">
                <p className=" text-[44px] leading-10">FOX.</p>
                <span className=" pl-[2px]">UNIVERSITY</span>
            </div>
            <div className="col-span-2 grid gap-3 md:grid-cols-3 ">
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
                     <p className="border-[1px] border-secondary bg-secondary py-2 px-4 text-xl leading-6 hover:bg-white hover:text-secondary
                     ">Apply now</p>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;