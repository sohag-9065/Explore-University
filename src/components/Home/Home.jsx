import Blog from "../Blog/Blog";
import Course from "../Course/Course";
import Staff from "../Staff/Staff";
import BlogSection from "./BlogSection";
import Culter from "./Culter";   
import Facilities from "./Facilities";
import Offer from "./Offer";

 
const Home = () => {
    return (
        <div className="">
            <h1>This is Home</h1> 
            <Facilities />
            <Offer />
            <Course limit={4}/>
            <Staff limit={4} />
            <BlogSection />
            <Culter />
        </div>
    );
};

export default Home;