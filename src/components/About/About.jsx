import Culter from "../Home/Culter";
import HomeSummery from "../Home/HomeSummery";
import Review from "../Home/Review";
import BannerNav from "../shared/BannerNav";
import AboutHistory from "./AboutHistory";

 
const About = () => {
    return (
        <div>
            <BannerNav title={"About US"} tag={"ABOUT US"} />
            <AboutHistory />
            <HomeSummery />
            <Review />
            <Culter />
        </div>
    );
};

export default About;