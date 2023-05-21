import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";

import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import AddToy from "../Pages/AddToy/AddToy";
import Blogs from "../Pages/Blogs/Blogs";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home/Home";
import ViewDetails from "../Pages/Shared/ViewDetails/ViewDetails";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main/>,
        children:[
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/all-toys',
                element: <AllToys/>
            },
            {
                path: '/my-toys',
                element: <PrivateRoutes><MyToys/></PrivateRoutes>
            },
            {
                path: '/add-toy',
                element: <PrivateRoutes><AddToy/></PrivateRoutes>
            },
            {
                path: '/blog',
                element: <Blogs/>
            },
            {
                path: '/details/:id',
                element: <PrivateRoutes><ViewDetails/></PrivateRoutes>,
                loader: ({params})=> fetch(`https://wheel-whiz-server.vercel.app/details/${params.id}`)

            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/login',
                element: <Login/>
            }
        ]
    }
])

export default router;