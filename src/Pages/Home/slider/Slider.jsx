import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import './Slider.css'




const carousel = (slider) => {
    const z = 300
    function rotate() {
        const deg = 360 * slider.track.details.progress
        slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
    }
    slider.on("created", () => {
        const deg = 360 / slider.slides.length
        slider.slides.forEach((element, idx) => {
            element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
        })
        rotate()
    })
    slider.on("detailsChanged", rotate)
}


const Slider = () => {

    const [sliderRef] = useKeenSlider(
        {
            loop: true,
            selector: ".carousel__cell",
            renderMode: "custom",
            mode: "free-snap",
        },
        [carousel]
    )


    return (
        <div className="flex justify-center">
            <div className="scene">
                <div className="carousel keen-slider" ref={sliderRef}>
                    <div className="carousel__cell">
                        <img src="https://hotwheelsunleashed.com/wp-content/uploads/2022/04/Veicolo_HOT-WHEELS%E2%84%A2-ScreenshotCollection_084_Camera_Marketing.png" alt="" className="w-full h-full object-cover"/>
                        <p className="text-center text-xs font-extrabold">BMW M3 GT2</p>
                    </div>


                    <div className="carousel__cell ">
                    <img src="https://hotwheelsunleashed.com/wp-content/uploads/2022/04/Veicolo_HOT-WHEELS%E2%84%A2-ScreenshotCollection_160_Camera_Marketing.png" alt="" className="w-full h-full object-cover"/>
                    <p className="text-center text-xs font-extrabold">RIVITED</p>
                    </div>


                    <div className="carousel__cell ">
                    <img src="https://hotwheelsunleashed.com/wp-content/uploads/2022/04/Veicolo_HOT-WHEELS%E2%84%A2-ScreenshotCollection_096_Camera_Marketing.png" alt="" className="w-full h-full object-cover"/>
                    <p className="text-center text-xs font-extrabold">McLaren 720S</p>
                    </div>


                    <div className="carousel__cell ">
                    <img src="https://hotwheelsunleashed.com/wp-content/uploads/2022/04/Veicolo_HOT-WHEELS%E2%84%A2-ScreenshotCollection_098Camera_Marketing-1.png" alt="" className="w-full h-full object-cover"/>
                    <p className="text-center text-xs font-extrabold">Aston Martin DBS</p>
                    </div>


                    <div className="carousel__cell ">
                    <img src="https://hotwheelsunleashed.com/wp-content/uploads/2022/03/Veicolo_HOT-WHEELS%E2%84%A2-ScreenshotCollection_41.png" alt="" className="w-full h-full object-cover"/>
                    <p className="text-center text-xs font-extrabold">Mad Manga</p>
                    </div>


                    <div className="carousel__cell ">
                    <img src="https://hotwheelsunleashed.com/wp-content/uploads/2022/02/Veicolo_HOT-WHEELS%CE%93ao-ScreenshotCollection_095_Camera_Marketing.png" alt="" className="w-full h-full object-cover"/>
                    <p className="text-center text-xs font-extrabold">McLaren Senna</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Slider;