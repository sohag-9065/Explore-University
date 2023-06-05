import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../components/shared/ErrorPage"; 
import Home from "../components/Home/Home";
import Course from "../components/Course/Course";
import Contact from "../components/Contact/Contact";


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
                path: '/courses',
                element: <Course />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
        ],
    }
])
 