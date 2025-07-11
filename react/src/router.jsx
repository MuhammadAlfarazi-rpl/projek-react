import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "./views/Login.jsx";
import Signup from "./views/Signup.jsx"
import Users from "./views/users.jsx";
import NotFound from "./views/NotFound.jsx";
import DefaultLayout from "./components/DefaultLayout.jsx";
import Dashboard from "./views/dashboard.jsx";
import GuessLayout from "./components/GuestLayout.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/users" />
      },
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'users',
        element: <Users />
      },
    ]
  },
  {
    path: '/',
    element: <GuessLayout />,
    children: [
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'signup',
        element: <Signup />
      },
    ]
  },
  {
    path: '*',
    element: <NotFound />
  },
]);

export default router;
