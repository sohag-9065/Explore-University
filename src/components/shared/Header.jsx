import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderTop from "./HeaderTop";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


const Header = () => {
    return (
        <div className="max-w-[1100px]   mx-auto">
            <HeaderTop />
            <div className="flex justify-between px-6 bg-primary items-center text-white">
                <div className="flex gap-10">
                    <p className="text-secondary">Home</p>
                    <p>About</p>
                    <p>courses</p>
                    <p>Staff</p>
                    <p>Blog</p>
                    <p>Contact</p>
                </div>
                <div  >
                    <div className=" border-[1px] border-slate-700 px-4 py-4 my-2 rounded-full ">
                        <input type="text" placeholder="Search" className=" w-80 bg-transparent pr-2  focus:outline-none" />
                        <FontAwesomeIcon icon={faSearch} className=" " />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;