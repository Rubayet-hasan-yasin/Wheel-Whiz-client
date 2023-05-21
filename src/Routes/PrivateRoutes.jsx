import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import gif from '../assets/142142-carhackdogs.gif'


const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    const location = useLocation();


    if(loading){
        return (
            <figure className="w-full">
                <img src={gif} alt="" className="mx-auto rounded-full w-36 mt-16" />
            </figure>
        );
    }

    if(user?.email){
        return children
    }


    return <Navigate to={'/login'} state={{from: location}} replace></Navigate>
};

export default PrivateRoutes;