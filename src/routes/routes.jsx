import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../components/shared/ErrorPage"; 
import Home from "../components/Home/Home";
import Course from "../components/Course/Course";
import Contact from "../components/Contact/Contact";
import Staff from "../components/Staff/Staff";
import Blog from "../components/Blog/Blog";
import About from "../components/About/About";


export const router = createBrowserRouter([
    {
        path: '/',
        element:<Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/home',
                element: <Home />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/course',
                element: <Course />,
            },
            {
                path: '/staff',
                element: <Staff />,
            },
            {
                path: '/blog',
                element: <Blog />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
        ],
    }
])
 