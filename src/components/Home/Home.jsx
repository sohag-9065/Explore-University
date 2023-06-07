import BlogSection from "./BlogSection";
import CourseSection from "./CourseSection";
import Culter from "./Culter";   
import Facilities from "./Facilities";
import HomeBanner from "./HomeBanner";
import HomeSummery from "./HomeSummery";
import Offer from "./Offer";
import QuoteRequest from "./QuoteRequest";
import Review from "./Review";
import StaffSection from "./StaffSection";

 
const Home = () => {
    return (
        <div >  
            <HomeBanner /> 
            <Facilities />
            <Offer />
            <HomeSummery />
            <CourseSection />
            <StaffSection />
            <QuoteRequest />
            <BlogSection />
            <Review />
            <Culter />
        </div> 
    );
};

export default Home;