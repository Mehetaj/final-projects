import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Signup from "../Pages/Login/Signup/Signup";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Book from "../Pages/Dashboard/UserDashboard/Book/Book";
import Carts from "../Pages/Dashboard/UserDashboard/Carts/Carts";
import MakeAdmin from "../Pages/Dashboard/AdminDashboard/MakeAdmin/MakeAdmin";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signup',
                element: <Signup />
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard />,
        children: [
            {
                path: 'books',
                element: <Book />
            },
            {
                path: 'bookinglist',
                element: <Carts />
            }
            // Admin Routes
            ,
            {
                path: 'make_admin',
                element: <MakeAdmin />
            }
        ]
    }
]);

export default router