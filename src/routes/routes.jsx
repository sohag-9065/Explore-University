import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../components/shared/ErrorPage"; 
import Home from "../components/Home/Home";


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
            }
        ],
    }
])
 