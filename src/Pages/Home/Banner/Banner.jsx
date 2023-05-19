import bannerIMG from '../../../assets/urban_racing_3.svg'
import './Banner.css'

const Banner = () => {
    return (
        <div className='md:flex w-full my-20'>
            <div className='md:w-[50%] h-full relative clip-path'>
                <img src={bannerIMG} alt="banner image" className='object-cover w-full'/>
            </div>


            <div className='md:w-[55%] '>
                <h4 className="text-red-700 text-4xl font-extrabold">NISSAN</h4>
                <h2 className='text-fuchsia-500 text-6xl font-extrabold mb-5'>SILVIA S15</h2>


                <p className='text-gray-500 font-semibold text-justify px-4'>As a part of the Hot Wheels collection, the Nissan Silvia S15 is immortalized in miniature form, allowing fans to own and showcase this legendary car. Its attention to detail, vibrant colors, and high-quality craftsmanship make it a must-have for Hot Wheels collectors and fans of the Nissan Silvia.

                    The Nissan Silvia S15 Hot Wheels car embodies the spirit of the original vehicle, featuring its distinctive body lines, aerodynamic styling, and signature elements that have made it an automotive icon. Whether displayed on a shelf or raced on Hot Wheels tracks, the Silvia S15 Hot Wheels car brings the excitement and charm of the real car into the hands of enthusiasts of all ages.</p>
            </div>
        </div>
    );
};

export default Banner;