import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import BannerNav from "../shared/BannerNav";

const Contact = () => {
    return (
        <div className="">
            {/* <ContactBanner /> */}
            <BannerNav title={"Contact Us"} tag={"Contact"}/>
            <ContactInfo />
            <ContactForm /> 
        </div>
    );
};

export default Contact;