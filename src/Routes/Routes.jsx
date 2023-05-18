import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import AddToy from "../Pages/AddToy/AddToy";
import Blogs from "../Pages/Blogs/Blogs";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";

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
                element: <MyToys/>
            },
            {
                path: '/add-toy',
                element: <AddToy/>
            },
            {
                path: 'blog',
                element: <Blogs/>
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