import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
    return (
        <div>
            <NavBar />
            <div className='container mx-auto min-h-[calc(100vh-328px)]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;