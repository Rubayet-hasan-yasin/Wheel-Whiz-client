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
        <div className="flex justify-center mt-40">
            <div className="scene">
                <div className="carousel keen-slider" ref={sliderRef}>
                    <div className="carousel__cell flex flex-col">
                        <img src="https://i.ibb.co/41ztjZJ/Hot-Wheels-PNG-Transparent-Picture.png" alt="" className="w-full"/>
                        <p className="text-center text-xs font-extrabold mt-auto">Twinduction 176/250 MISB</p>
                    </div>


                    <div className="carousel__cell flex flex-col">
                    <img src="https://i.ibb.co/Kj3NQgM/Hot-Wheels-PNG-Image.png" alt="" className="w-full"/>
                    <p className="text-center text-xs font-extrabold mt-auto">Chevrolet Corvette Z06</p>
                    </div>


                    <div className="carousel__cell flex flex-col">
                    <img src="https://i.ibb.co/qFrfzW4/customized-vehicle-1536x876.png" alt="" className="w-full"/>
                    <p className="text-center text-xs font-extrabold mt-auto">Twin Mill</p>
                    </div>


                    <div className="carousel__cell flex flex-col">
                    <img src="https://i.ibb.co/tHDv3zM/Hot-Wheels-PNG-File.png" alt="" className="w-full"/>
                    <p className="text-center text-xs font-extrabold mt-auto">Bone Shaker</p>
                    </div>


                    <div className="carousel__cell flex flex-col">
                    <img src="https://i.ibb.co/sQ8j2GK/kisspng-ferrari-599xx-car-ferrari-testarossa-chevrolet-cor-hot-wheels-5ac34b24c7f333-117234651522748.png" alt="" className="w-full"/>
                    <p className="text-center text-xs font-extrabold mt-auto">Ferrari 599XX</p>
                    </div>


                    <div className="carousel__cell flex flex-col">
                    <img src="https://i.ibb.co/MffBmqY/kisspng-car-lamborghini-aventador-hot-wheels-die-cast-toy-lamborghini-5abc31a813e513-117504381522282.png" alt="" className="w-full"/>
                    <p className="text-center text-xs font-extrabold mt-auto">Lamborghini Veneno</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Slider;