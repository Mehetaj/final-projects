import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Signup from "../Pages/Login/Signup/Signup";
import SignIn from "../Pages/Login/Signin/SignIn";
import DocDetails from "../Pages/Home/DocTabs/DocDetails";
import Appointment from "../Pages/Appointment/Appointment";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'details/:id',
                element: <DocDetails />,
                loader: () => fetch('Doctab.json')
            },
            {
                path: 'appointment',
                element: <Appointment></Appointment>
            }
        ]
    },
    {
        path: 'login',
        element: <SignIn />
    },
    {
        path: 'signup',
        element: <Signup />
    }
])

export default router