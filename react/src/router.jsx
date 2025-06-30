import { createBrowserRouter } from "react-router-dom";
import Login from "./views/login.jsx";
import Signup from "./views/signup.jsx";
import Users from "./views/users.jsx";
import NotFound from "./views/NotFound.jsx";


const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signup',
        element: <Signup />
    },
    {
        path: '/users',
        element: <Users />
    },
    {
        path: '*',
        element: <NotFound /> 
    },
])

export default router;
