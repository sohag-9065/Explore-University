import { Form } from "react-router-dom";


const ContactForm = () => {
    return (
        <div className=" max-w-[1140px]   mx-auto grid grid-cols-2">
            <div className="bg-[#E8EAED] flex flex-col justify-center items-center p-20">
                <p className="py-10">Oops! Something went wrong.</p>

                <p className="text-xs">This page didn't load Google Maps correctly. See the JavaScript console for technical details.</p>
            </div>
            <div className="bg-[#FAFAFA] p-12"> 
                <p className="pb-4">
                    <input type="text"  className="w-full p-3 text-lg border-[1px] border-gray/[.5] focus:border-black focus:outline-none" placeholder="Your Name" />
                </p>
                <p className="pb-4">
                    <input type="text"  className="w-full p-3 text-lg border-[1px] border-gray/[.5] focus:border-black focus:outline-none" placeholder="Your Email" />
                </p>
                <p className="pb-4">
                    <input type="text"  className="w-full p-3 text-lg border-[1px] border-gray/[.5] focus:border-black focus:outline-none" placeholder="Subject" />
                </p>

                <p className="pb-4">
                    <textarea rows="6" type="text"  className="w-full p-3 text-lg border-[1px] border-gray/[.5] focus:border-black focus:outline-none" placeholder="Message" />
                </p>

                <div className="flex   items-center text-white">
                     <p className="text-xl border-[1px] border-secondary bg-secondary py-4 px-6 rounded-full leading-6 hover:bg-white hover:text-secondary
                     ">Send Message</p>
                </div>

            </div>

        </div>
    );
};

export default ContactForm;