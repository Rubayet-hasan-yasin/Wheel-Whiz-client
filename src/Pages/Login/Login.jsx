import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import GoogleButton from "./GoogleButton/GoogleButton";
import { toast } from "react-hot-toast";

const Login = () => {
    useTitle('Login')
    const [error, setError] = useState('');
    const { loginWithEmailAndPassword } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';


    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginWithEmailAndPassword(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
                toast.success('Successfully Login!')

            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })

            form.reset()

    }
    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
            <div className="bg-white w-2/4 shadow-lg rounded-lg p-8">
                <h2 className="text-4xl text-center font-bold mb-10">Please Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input type="email" name="email" id="email" className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input type="password" name="password" id="password" className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300" required />
                    </div>
                    <p className="text-warning mb-5 text-base">{error}</p>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">Register</button>
                </form>
                <p className="text-sm text-gray-700 mt-4">Don't have an account? <Link to={'/register'} className="text-blue-500 font-bold">Register here</Link></p>
            <GoogleButton></GoogleButton>
            </div>
        </div>
    );
};

export default Login;