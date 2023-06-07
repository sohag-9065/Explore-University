import Culter from "../Home/Culter";
import BannerNav from "../shared/BannerNav";
import AboutHistory from "./AboutHistory";

 
const About = () => {
    return (
        <div>
            <BannerNav title={"About US"} tag={"ABOUT US"} />
            <AboutHistory />
            <Culter />
        </div>
    );
};

export default About;