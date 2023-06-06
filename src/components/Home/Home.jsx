import Blog from "../Blog/Blog";
import Course from "../Course/Course";
import Staff from "../Staff/Staff";
import BlogSection from "./BlogSection";
import Culter from "./Culter";   
import Facilities from "./Facilities";
import Offer from "./Offer";
import StaffSection from "./StaffSection";

 
const Home = () => {
    return (
        <div className="">
            <h1>This is Home</h1> 
            <Facilities />
            <Offer />
            <Course limit={4}/>
            <StaffSection />
            <BlogSection />
            <Culter />
        </div>
    );
};

export default Home;