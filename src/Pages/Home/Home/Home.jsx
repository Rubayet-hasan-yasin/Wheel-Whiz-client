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

const Home = () => {
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

            <div className="grid grid-cols-2">
                <div className="">
                    <Lottie className="h-full w-fit" animationData={carAnimation} loop={true}></Lottie>
                </div>

            </div>
        </div>
    );
};

export default Home;