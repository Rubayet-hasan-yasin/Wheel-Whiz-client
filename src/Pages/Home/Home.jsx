
import Banner from "./Banner/Banner";
import HomeGellery from "./HomeGallery/HomeGellery";

const Home = () => {
    return (
        <div>
            <Banner/>
            
            <div className="my-40">
                <h1 className="text-5xl font-bold text-center text-gray-800"> A Gallery of Wheel</h1>
                <p className="text-center text-base text-gray-500 font-semibold mt-1 mb-20">Discover the laughter, the adventures, and the limitless possibilities that Wheel bring to life.</p>



                <HomeGellery/>
            </div>
        </div>
    );
};

export default Home;