import { faArrowRight, faCalendarDays, faEnvelope, faHeart, faLocationDot, faMessage, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import blog1 from '../../assets/footer/blog1.webp';
import blog2 from '../../assets/footer/blog2.webp';

const FooterSection = () => {
    return (
        <div className="bg-foot py-20">
            <div className="grid md:grid-cols-4 gap-8 p-6 md:p-2 max-w-[1100px]   mx-auto  text-white ">
                <div className=" pr-2">
                
                    <h2 className="text-2xl mb-10">Have a Questions?</h2>
                    <div className="flex mb-4">
                        <FontAwesomeIcon icon={faLocationDot} className="mt-1" />
                        <p className="pl-4 text-white/[.6]">	203 Fake St. Mountain View, San Francisco, California, USA</p>
                    </div>
                    <div className="flex mb-8">
                        <FontAwesomeIcon icon={faPhone} className="mt-1" />
                        <p className="pl-4  ">+2 392 3929 210</p>
                    </div>
                    <div className="flex ">
                        <FontAwesomeIcon icon={faEnvelope} className="mt-1" />
                        <p className="pl-4  ">	info@yourdomain.com</p>
                    </div>
                </div>
                <div className=" pr-2">
                    <h2 className="text-2xl mb-10">Recent Blog</h2>
                    <div className="flex mb-9">
                        <img src={blog1} alt="" className="w-20 h-20 mt-1" />
                        <div className="pl-4">
                            <p className=" hover:text-secondary text-white">	Even the all-powerful Pointing has no control about</p>
                            <p className="text-white/[.3] pt-4 text-sm">
                                <FontAwesomeIcon icon={faCalendarDays} />
                                <span className="pl-2">June 27, 2019</span>
                            </p>
                            <p className="text-white/[.3] mt-2 text-sm">
                                <FontAwesomeIcon icon={faUser} />
                                <span className="pl-2 pr-4">Admin</span>
                                <FontAwesomeIcon icon={faMessage} />
                                <span className="pl-1 pr-4">19</span>
                            </p>
                        </div>
                    </div>
                    <div className="flex ">
                        <img src={blog2} alt="" className="w-20 h-20 mt-1" />
                        <div className="pl-4">
                            <p className=" hover:text-secondary text-white">	Even the all-powerful Pointing has no control about</p>
                            <p className="text-white/[.3] pt-4 text-sm">
                                <FontAwesomeIcon icon={faCalendarDays} />
                                <span className="pl-2">June 27, 2019</span>
                            </p>
                            <p className="text-white/[.3] mt-2 text-sm">
                                <FontAwesomeIcon icon={faUser} />
                                <span className="pl-2 pr-4">Admin</span>
                                <FontAwesomeIcon icon={faMessage} />
                                <span className="pl-1 pr-4">19</span>
                            </p>
                        </div>
                    </div>

                </div>
                <div className=" pr-2">
                    <h2 className="text-2xl mb-10">Links</h2>
                    <p className="text-white/[.6]">
                        <FontAwesomeIcon icon={faArrowRight} />
                        <span className="pl-2">Home</span>
                    </p>
                    <p className="text-white/[.6]">
                        <FontAwesomeIcon icon={faArrowRight} />
                        <span className="pl-2">About</span>
                    </p>
                    <p className="text-white/[.6]">
                        <FontAwesomeIcon icon={faArrowRight} />
                        <span className="pl-2">Services</span>
                    </p>
                    <p className="text-white/[.6]">
                        <FontAwesomeIcon icon={faArrowRight} />
                        <span className="pl-2">Departments</span>
                    </p>
                    <p className="text-white/[.6]">
                        <FontAwesomeIcon icon={faArrowRight} />
                        <span className="pl-2">Contact</span>
                    </p>
                </div>
                <div className=" pr-2">
                    <h2 className="text-2xl mb-10">Subscribe Us!</h2>
                    <div>
                        <input type="text" placeholder="Enter email address" className="w-full py-3 bg-white/[.1] text-white/[.6] text-center focu
                        outline-none" />
                        <p className="bg-fifth hover:bg-secondary  mt-3 text-center py-3 ">Subscribe</p>
                    </div>
                    <div>
                        <h2 className="text-2xl mt-12 mb-4">Connect With Us</h2>
                        <div className="flex  gap-4">
                            <p className="bg-white/[.1] px-3 py-2 rounded-full"><FontAwesomeIcon icon={faTwitter} /></p>
                            <p className="bg-white/[.1] px-4 py-2 rounded-full"><FontAwesomeIcon icon={faFacebookF} /></p>
                            <p className="bg-white/[.1] px-3 py-2 rounded-full"><FontAwesomeIcon icon={faInstagram} /></p>
                        </div>
                    </div>
                </div>
            </div>

            <p className=" text-white text-center pt-24">
                <span>Copyright ©2023 All rights reserved | This template is made with </span>
              <FontAwesomeIcon icon={faHeart} className="px-1"/> 
                <span> by Sohag</span>
            </p>

        </div>
    );
};

export default FooterSection;