import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GiCarWheel } from "react-icons/gi";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { Tooltip } from "react-tooltip";



const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };


    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                console.log(error);
            })
    }





    const list = <>
        <li>
            <NavLink
                to='/'
                className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to='/all-toys'
                className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
                All Toys
            </NavLink>
        </li>
        {
            user &&
            <>
                <li>
                    <NavLink
                        to='/my-toys'
                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >
                        My Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/add-toy'
                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >
                        Add A Toy
                    </NavLink>
                </li>
            </>
        }
        <li>
            <NavLink
                to='/blog'
                className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
                Blog
            </NavLink>
        </li>
        {
            user &&
            <li className="avatar">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-0">
                    <img
                        id='name-show'
                        src={user?.photoURL || 'https://i.ibb.co/vhHRv1N/154901-OV13-M5-460-ai.png'}
                        className="object-cover w-12 h-12" />
                </div>
            </li>
        }
        <li>
            {user ?
                <button onClick={handleLogOut} className='ml-12 py-3 px-7 bg-[#F9A51A] rounded-lg shadow-md hover:bg-[#f9a31ac5] hover:ring-1'>Log out</button>
                :
                <Link to={'/login'}>
                    <button className='ml-12 py-3 px-7 bg-[#F9A51A] rounded-lg shadow-md hover:bg-[#f9a31ac5] hover:ring-1'>Login</button>
                </Link>
            }
        </li>
    </>


    return (
        <nav className="bg-base-200">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to={'/'}>
                            <h4 className="text-gray-700 font-bold text-3xl flex gap-2 items-center">
                                <GiCarWheel className="w-11 h-11" /> Wheel Whiz
                            </h4>
                        </Link>
                    </div>

                    <ul className='space-x-8 hidden md:flex md:items-center'>
                        {list}
                    </ul>




                    <div className="flex md:hidden">
                        <button
                            className="text-gray-700 hover:text-white focus:outline-none"
                            onClick={handleMobileMenuToggle}
                        >
                            <svg
                                className="h-6 w-6 fill-current"
                                viewBox="0 0 24 24"
                            >
                                {isMobileMenuOpen ? (
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M5 4H19C19.5523 4 20 4.44772 20 5C20 5.55228 19.5523 6 19 6H5C4.44772 6 4 5.55228 4 5C4 4.44772 4.44772 4 5 4ZM20 9H4C3.44772 9 3 9.44772 3 10C3 10.5523 3.44772 11 4 11H20C20.5523 11 21 10.5523 21 10C21 9.44772 20.5523 9 20 9ZM20 16H4C3.44772 16 3 16.4477 3 17C3 17.5523 3.44772 18 4 18H20C20.5523 18 21 17.5523 21 17C21 16.4477 20.5523 16 20 16Z"
                                    />
                                ) : (
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M4 6C3.44772 6 3 6.44772 3 7C3 7.55228 3.44772 8 4 8H20C20.5523 8 21 7.55228 21 7C21 6.44772 20.5523 6 20 6H4ZM4 13C3.44772 13 3 13.4477 3 14C3 14.5523 3.44772 15 4 15H12C12.5523 15 13 14.5523 13 14C13 13.4477 12.5523 13 12 13H4ZM3 19C3 18.4477 3.44772 18 4 18H20C20.5523 18 21 18.4477 21 19C21 19.5523 20.5523 20 20 20H4C3.44772 20 3 19.5523 3 19Z"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {isMobileMenuOpen && (
                    <ul className="md:hidden mt-2 space-y-8">
                        {
                            list
                        }
                    </ul>
                )}
            </div>
            <Tooltip anchorSelect="#name-show"
                content={user?.displayName} />
        </nav>
    );
};

export default NavBar;