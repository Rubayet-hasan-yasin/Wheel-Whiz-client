import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import AddToy from "../Pages/AddToy/AddToy";
import Blogs from "../Pages/Blogs/Blogs";

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
            }
        ]
    }
])

export default router;