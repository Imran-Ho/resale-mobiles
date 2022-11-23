import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Login/Login";
import Signup from "../Components/Signup/Signup";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";

export const routers = createBrowserRouter([
    {
        path: '/', element: <Main></Main>,
        children:[
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/login', element: <Login></Login>
            },
            {
                path: '/signup', element: <Signup></Signup>
            },
        ]
    }
])