import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";


const GoogleButton = () => {
    const {googleSignIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleGoogle = ()=>{
        googleSignIn()
        .then(()=> {
            navigate(from, { replace: true })
            toast.success('Successfully Login!')

        })
        .catch(error=> {
            console.log(error);
        })
    }


    return (
        <div className="grid place-content-center mt-16">
            <button onClick={handleGoogle} className='flex items-center gap-4 text-xl font-extrabold text-white bg-blue-950 hover:bg-blue-900 px-9 py-2 rounded-3xl shadow-xl my-1 focus:ring-4 hover:ring-2'><FcGoogle className='h-8 w-8' /> Login With Google</button>
        </div>
    );
};

export default GoogleButton;