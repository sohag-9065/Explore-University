import img from '../../assets/summery/bg_3.jpg.webp';
import img2 from '../../assets/summery/about-2.jpg.webp'
import './summery.css';
import { useState } from 'react';
const HomeSummery = () => {

    const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    const iframeSrc = document.querySelector('.box-video iframe').src;
    document.querySelector('.box-video iframe').src = `${iframeSrc}&amp;autoplay=1`;
    setIsOpen(true);
  };
    
    return (
        <div className="relative  overflow-hidden bg-gradient-to-r from-[#0d1128] to-[#fd6100]   bg-opacity-30 bg-cover bg-top flex justify-center items-center  py-28  ">
            {/* <div className="absolute z-10 top-0 bottom-0 left-0 right-0 opacity-40 bg-[#f1453d]"></div> */}
            <img src={img} alt="" className='w-full top-0 opacity-50  z-0 absolute  ' />
            <div className=' h-[560px]'>
                <div className=" grid grid-cols-2  max-w-[1140px] mx-auto backdrop-contrast-100 opacity-100  ">
                    <div className="box-video">
                        <div className="bg-video" style={{ backgroundImage: `url(${img2})` }}>
                            <div className="bt-play"></div>
                        </div>
                        <div    className={`box-video ${isOpen ? 'open' : ''} video-container`} onClick={handleClick}>
                            <iframe src="https://player.vimeo.com/video/45830194?h=2c5541d8bc&color=ffffff&title=0&byline=0&portrait=0&badge=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className="px-12   z-30">
                        <h2 className="text-5xl  pb-6 backdrop-contrast-100 opacity-100 font-extrabold text-white " >Fox university </h2>
                        <p className=" pb-6 text-white backdrop-contrast-100 opacity-100">Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                        <p className=" pb-6 text-white backdrop-contrast-100 opacity-100">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>

                    </div>
                </div>
                <div className=' grid grid-cols-4 text-white mt-16 backdrop-contrast-100 opacity-100 justify-center items-center'>
                    <div>
                        <p className='text-5xl font-bold mb-6 text-center'>18</p>
                        <p className='text-center'>Certified Teachers</p>
                    </div>
                    <div>
                        <p className='text-5xl font-bold mb-6 text-center'>401</p>
                        <p className="text-center">Students</p>
                    </div>
                    <div>
                        <p className='text-5xl font-bold mb-6 text-center'>30</p>
                        <p className='text-center'>Courses</p>
                    </div>
                    <div>
                        <p className='text-5xl font-bold mb-6 text-center'>50</p>
                        <p className='text-center'> Awards Won</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default HomeSummery;