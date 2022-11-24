import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Login/Login";
import Signup from "../Components/Signup/Signup";
import DetailsView from "../Dashboard/DetailsView/DetailsView";
import EmptyPage from "../EmptyPage/EmptyPage";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import Items from "../Pages/Home/Categories/Items/Items";
import Home from "../Pages/Home/Home";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
            {
                path: '/blog', element: <Blog></Blog>
            },
            {
                path: '/category/:id', element: <PrivateRoute><Items></Items></PrivateRoute>,
                loader:({params}) => fetch(`http://localhost:5000/items/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboard', element: <DashboardLayout></DashboardLayout>,
        children:[
            {
                path: '/dashboard', element: <DetailsView></DetailsView>
            }
        ]
    },
    {
        path: '*', element: <EmptyPage></EmptyPage>
    }
])