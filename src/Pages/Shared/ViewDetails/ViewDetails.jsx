import { Rating } from "@smastrom/react-rating";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
    const toyDetails = useLoaderData();
    const [seeMore, setSeeMore] = useState(false);
    console.log(toyDetails);

    const { img, toyName, rating, price, description, sellerName, sellerEmail, availableQuantity, subCategory } = toyDetails;


    return (
        <div className="card lg:card-side bg-base-100 shadow-xl gap-10 my-10">
            <figure className="w-1/3"><img src={img} alt="toy img" className="object-cover w-full" /></figure>
            <div className="card-body w-1/2">
                <h2 className="text-5xl text-gray-700 font-bold my-2">{toyName}</h2>

                <div className="flex items-center gap-3">
                    <Rating
                        style={{ maxWidth: 120 }}
                        value={rating}
                        readOnly
                    />
                    <p>{rating}</p>
                </div>

                <div className="border-b-2">
                    <p className="text-2xl text-gray-800 font-extrabold my-4">${price}</p>

                    <p className="text-xl text-orange-400 font-extrabold ">Available{availableQuantity}</p>
                    <p className="text-xl text-green-400 font-extrabold">{subCategory}</p>

                    <p className="text-2xl text-gray-600 font-extrabold my-4 mt-10">Product Details</p>



                    <p className="text-xl text-gray-800 font-extrabold my-4">{seeMore ? description : description.split(' ').slice(0, 15).join(' ')} <span onClick={()=>setSeeMore(!seeMore)} className="text-blue-500 text-xs underline cursor-pointer hover:text-blue-700">See More</span></p>
                </div>

                <div className="mt-auto">
                    <p className="text-xl text-gray-500 font-extrabold my-4"><span className="text-orange-500">Seller Name:</span> {sellerName}</p>
                    <p className="text-xl text-gray-500 font-extrabold my-4"><span className="text-orange-500">Seller Email:</span> {sellerEmail}</p>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;