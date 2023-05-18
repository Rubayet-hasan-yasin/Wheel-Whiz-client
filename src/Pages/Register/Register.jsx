import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
    const [error, setError] = useState('');
    const { registerWithEmailAndPassword } = useContext(AuthContext);


    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        registerWithEmailAndPassword(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                updateProfile(user, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => { })
                    .catch(error => {
                        console.log(error);
                        setError(error.message)
                    })
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
                <h2 className="text-4xl text-center font-bold mb-10">Create an Account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                        <input type="text" name="name" id="name" className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Photo URL</label>
                        <input type="url" name="photo" id="photo" className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300" required />
                    </div>
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
                <p className="text-sm text-gray-700 mt-4">Already have an account? <Link to={'/login'} className="text-blue-500 font-bold">Login here</Link></p>
            </div>
        </div>
    );
};

export default Register;