import { Link } from "react-router-dom";
import gif from "../../assets/errow-404.gif"

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center h-screen flex-col">
            <figure className="m-0">
                <img src={gif} alt="gif" className="w-60" />
            </figure>
            <p className='text-lg font-semibold mb-2'>404 - PAGE NOT FOUND</p>
            <p className='text-center'>The page you are looking for might have been removed <br /> had its name changed or is temporarily unavailable.</p>

            <Link to={'/'}>
                <button className='my-9 text-2xl font-semibold text-white shadow-2xl bg-sky-500 py-4 px-16 rounded-3xl'>GO TO HOMEPAGE</button>
            </Link>
        </div>
    );
};

export default ErrorPage;