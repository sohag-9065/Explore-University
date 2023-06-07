/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import Slider from "react-slick";
import img1 from '../../assets/homeBanner/bg_1.jpg.webp';
import img2 from '../../assets/homeBanner/bg_2.jpg.webp';

import './homeBanne.css';

function SampleNextArrow() {
    return (
        <div
            style={{ display: "none" }}
        />
    );
}

const HomeBanner = () => {

    const style =  {
            backgroundImage: `url(${img1})`
    }

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrow: false,
        nextArrow: <SampleNextArrow />,
        customPaging: () => (
            <div
                style={{
                    position: "absolute",
                    bottom: "60px",
                    opacity: 1,
                    fontSize: "100px",
                    color: "#fff"
                }}
            >
                .
            </div>
        )
    };

    return (
        <div className="relative">
            <Slider {...settings}>


                <div className="bg-homeBanner1 bg-top bg-cover  h-[600px] w-full"  >
                    <div className="absolute top-0 bottom-0 left-0 right-0 opacity-30 bg-[#f1453d]/[.6]"></div>
                    <div className="z-20 grid grid-cols-1 px-6 sm:px-12 md:px-6   items-center justify-start max-w-[1140px] mx-auto  cursor-pointer  backdrop-contrast-100 opacity-100  h-full text-white">
                            
                            <div className=" max-w-[400px] mx-auto sm:mx-0 text-center sm:text-start">
                                <p className="text-5xl  cursor-pointer font-bold   mb-10 ">University, College School Education</p>
                                <p className="mb-10"> A small river named Duden flows by their place and supplies it with the necessary regelialia. </p>
                                <div className="flex   items-center justify-center sm:justify-start ">
                                    <p className="text-xl border-[1px] border-secondary bg-secondary py-4 px-6 rounded-full leading-6 hover:bg-inherit hover:text-secondary">Contact Us</p>
                                </div>
                            </div>

                         
                    </div>

                </div>
                <div className="bg-homeBanner2 bg-center bg-cover h-[600px] w-full" >
                    <div className="absolute top-0 bottom-0 left-0 right-0 opacity-30  bg-[#f1453d]/[.6]"></div>
                    <div className="z-20 grid grid-cols-1 px-6 sm:px-12 md:px-6   items-center  max-w-[1140px] mx-auto  cursor-pointer  backdrop-contrast-100 opacity-100  h-full text-white">
                        <div className="  max-w-[400px] mx-auto sm:mx-0 text-center sm:text-start" >
                            <p className="text-5xl cursor-pointer font-bold  mb-10 ">Education Needs Complete Solution</p>
                            <p className="mb-10"> A small river named Duden flows by their place and supplies it with the necessary regelialia. </p>
                            <div className="flex   items-center justify-center sm:justify-start">
                                <p className="text-xl border-[1px] border-secondary bg-secondary py-4 px-6 rounded-full leading-6 hover:bg-inherit  hover:text-secondary ">Contact Us</p>
                            </div>
                        </div>
                    </div>
                </div>


            </Slider>
        </div>
    );
};

export default HomeBanner;

