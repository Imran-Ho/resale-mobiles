import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Login/Login";
import Signup from "../Components/Signup/Signup";
import AddProduct from "../Dashboard/AddProduct/AddProduct";
import AllBuyer from "../Dashboard/AllBuyer/AllBuyer";
import AllSellers from "../Dashboard/AllSellers/AllSellers";
import DetailsView from "../Dashboard/DetailsView/DetailsView";
import MyOrders from "../Dashboard/MyOrders/MyOrders";
import Payment from "../Dashboard/MyOrders/Payment/Payment";
import MyProducts from "../Dashboard/MyProducts/MyProducts";
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
                loader:({params}) => fetch(`https://project-12-server.vercel.app/items/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboard', element: <DashboardLayout></DashboardLayout>,
        children:[
            
            {
                path: '/dashboard', element: <DetailsView></DetailsView>
            },
            {
                path: '/dashboard/orders', element: <MyOrders></MyOrders> 
            },
            {
                path: '/dashboard/allSellers', element: <AllSellers></AllSellers> 
            },
            {
                path: '/dashboard/allBuyers', element: <AllBuyer></AllBuyer> 
            },
            {
                path: '/dashboard/payment/:id', element: <Payment></Payment>,
                loader: ({params}) => fetch(`https://project-12-server.vercel.app/booking/${params.id}`)
            },
            {
                path: '/dashboard/add-product', element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myProduct', element: <MyProducts></MyProducts>
            }
        ]
    },
    {
        path: '*', element: <EmptyPage></EmptyPage>
    }
])