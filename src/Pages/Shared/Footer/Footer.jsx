import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { GiCarWheel } from 'react-icons/gi';
import { Link } from 'react-router-dom';




const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <div>
                <Link to={'/'}>
                    <h4 className="text-gray-700 font-bold text-3xl flex gap-2 items-center">
                        <GiCarWheel className="w-11 h-11" /> Wheel Whiz
                    </h4>
                </Link>




                <h4 className="footer-title mt-8 text-xl">Follow Us</h4>

                <div className='grid grid-cols-3 gap-6'>
                    
                    <button className='bg-slate-300 bg-opacity-40 hover:bg-opacity-60 h-14 w-14 p-2 rounded-full'><FaTwitter className="w-full h-full"/></button>
                    <button className='bg-slate-300 bg-opacity-40 hover:bg-opacity-60 h-14 w-14 p-2 rounded-full'><FaFacebookF className="w-full h-full"/></button>
                    <button className='bg-slate-300 bg-opacity-40 hover:bg-opacity-60 h-14 w-14 p-2 rounded-full'><FaInstagram className="w-full h-full"/></button>
                    
                </div>


            </div>
            <ul>
                <span className="footer-title">Services</span>
                <li className="link link-hover">Toy Sales</li>
                <li className="link link-hover">Repairs & Maintenance</li>
                <li className="link link-hover">Customization</li>
                <li className="link link-hover">Events & Parties</li>
            </ul>
            <ul>
                <span className="footer-title">Company</span>
                <li className="link link-hover">Home</li>
                <li className="link link-hover">All Toys</li>
                <li className="link link-hover">My Toys</li>
                <li className="link link-hover">Add A Toy</li>
            </ul>
            <ul>
                <span className="footer-title">Legal</span>
                <li className="link link-hover">Terms of Service</li>
                <li className="link link-hover">Privacy Policy</li>
                <li className="link link-hover">Shipping & Returns</li>
                <li className="link link-hover">Cookie Policy</li>
            </ul>
        </footer>
    );
};

export default Footer;