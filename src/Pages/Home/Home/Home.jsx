import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import HomeGellery from "../HomeGallery/HomeGellery";
import Slider from "../slider/Slider";
import gif1 from '../../../assets/car-animation.gif'
import gif2 from '../../../assets/car-animation2.gif'
import gif3 from '../../../assets/red-car.gif'
import gif4 from '../../../assets/wonder-car.gif'
import Lottie from "lottie-react";
import carAnimation from "../../../assets/car-gps.json";
import useTitle from "../../../hooks/useTitle";




const Home = () => {
    useTitle('Home')


    return (
        <div>
            <Banner />

            <div className="my-40">
                <h1 className="text-5xl font-bold text-center text-gray-800"> A Gallery of Wheel</h1>
                <p className="text-center text-base text-gray-500 font-semibold mt-1 mb-20">Discover the laughter, the adventures, and the limitless possibilities that Wheel bring to life.</p>



                <HomeGellery />
            </div>

            <div className="my-40">
                <h1 className="text-5xl font-bold text-center text-gray-800">Shop by category</h1>
                <p className="text-center text-base text-gray-500 font-semibold mt-1 mb-20"> Explore our wide range of toys categorized to make your shopping experience easier and more enjoyable.</p>



                <Category />

            </div>

            <div className="my-40">
                <h1 className="text-5xl font-bold text-center text-gray-800">CAR COLLECTION</h1>
                <p className="text-center text-base text-gray-500 mt-1">Get behind the wheel of the coolest, fastest and most legendary vehicles, with their own personality, driving style and levels of rarity.</p>
                <Slider></Slider>
            </div>

            <div className="grid grid-cols-4 items-center justify-items-center">
                <img src={gif1} alt="gif" className="h-[80px]" />
                <img src={gif2} alt="gif" className="h-[80px]" />
                <img src={gif3} alt="gif" className="h-48" />
                <img src={gif4} alt="gif" className="h-36" />
            </div>


            <h1 className="text-5xl font-bold text-center text-gray-800 mt-40">Visit Us</h1>
            <p className="text-center text-base text-gray-500 mt-1 mb-20">Discover our physical address, contact information, and how to reach us.</p>


            <div className="grid grid-cols-2 ">

                <div className="">
                    <Lottie className="h-full w-fit" animationData={carAnimation} loop={true}></Lottie>
                </div>

                <div className="">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d564452.2195330671!2d8.196773100711873!3d48.91400829796402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41096003a04d9eeb%3A0x32a3117d633f8060!2sWhizz-Wheels!5e0!3m2!1sen!2sbd!4v1684517556391!5m2!1sen!2sbd" width="100%" height="100%" style={{border:0}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    );
};

export default Home;