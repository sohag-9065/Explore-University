import img1 from '../../assets/summery/bg_3.jpg.webp'
import img2 from '../../assets/summery/about-2.jpg.webp'
import { useState } from 'react';


const HomeSummery = () => {
    const [showVideo, setShowVideo] = useState(false);

    const handleClick = () => {
        setShowVideo(true);
    };


    return (
        <div className="relative   overflow-hidden px-6 sm:px-12 md:px-6   bg-opacity-80 bg-cover bg-center flex justify-center items-center  py-28  " style={{ backgroundImage: `url(${img1})` }}>
            <div className="absolute z-10 top-0 bottom-0 left-0 right-0 opacity-30 bg-[#f1453d]"></div>
            {/* <img src={img} alt="" className='w-full top-0 bottom-0 opacity-50  z-0 absolute  ' /> */}
            <div className='  '>
                <div className=" grid  sm:grid-cols-2 justify-start items-start gap-5 max-w-[1140px] mx-auto   ">
                    <div className='relative overflow-hidden mx-auto z-30' >
                        <div>
                            {!showVideo && (
                                <div className='cursor-pointer' onClick={handleClick}>
                                    <img
                                        src={img2}
                                        alt="Video Thumbnail"
                                        className='    w-[400px] h-[225px] ss:w-[450px] ss:h-[255px] sm:w-[400px] sm:h-[225px] md:w-[540px] md:h-[305px]'
                                    /> 
                                </div>
                            )}

                            {showVideo && (
                                <div>
                                    <iframe className="aspect-video sm:aspect-square md:aspect-video w-[400px]     sm:w-[280px]  md:w-[540px]     backdrop-contrast-100 opacity-100 " src="https://player.vimeo.com/video/45830194?h=2c5541d8bc&color=ffffff&title=0&byline=0&portrait=0&badge=0"  frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            )}
                        </div>

                    </div>
                    <div className=" px-6 sm:p6-4 md:px-12 pt-12 sm:pt-0 z-30 ">
                        <h2 className="text-2xl md:text-5xl  pb-6  text-white backdrop-contrast-100 opacity-100 font-extrabold " >Fox University </h2>
                        <p className=" ss:pb-6 text-white backdrop-contrast-100 opacity-100">Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                        <p className=" ss:pb-6 text-white backdrop-contrast-100 opacity-100">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>

                    </div>
                </div>
                <div className=' grid sm:grid-cols-4 mt-16 gap-10 justify-center items-center '>

                    <div className='   z-30'>
                        <p className='text-2xl md:text-5xl  font-bold mb-6 text-center text-white backdrop-contrast-100 opacity-100  '>18</p>
                        <p className='text-center text-white backdrop-contrast-100 opacity-100 '>Certified Teachers</p>
                    </div>
                    <div className='   z-30'>
                        <p className='text-2xl md:text-5xl  font-bold mb-6 text-center  text-white backdrop-contrast-100 opacity-100 '>401</p>
                        <p className="text-center  text-white backdrop-contrast-100 opacity-100 ">Students</p>
                    </div>
                    <div className='   z-30'>
                        <p className='text-2xl md:text-5xl  font-bold mb-6 text-center  text-white backdrop-contrast-100 opacity-100 '>30</p>
                        <p className='text-center  text-white backdrop-contrast-100 opacity-100 '>Courses</p>
                    </div>
                    <div className='   z-30'>
                        <p className='text-2xl md:text-5xl  font-bold mb-6 text-center  text-white backdrop-contrast-100 opacity-100 '>50</p>
                        <p className='text-center  text-white backdrop-contrast-100 opacity-100 '> Awards Won</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default HomeSummery;