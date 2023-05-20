import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import gif from '../../../../assets/142142-carhackdogs.gif'

import '@smastrom/react-rating/style.css'

const TabContent = ({ selectedTab }) => {
    const [toys, setToys] = useState([]);
    const [istrue, setIsTrue] = useState(false);

    console.log(selectedTab);
    useEffect(() => {
        setIsTrue(true)
        fetch(`http://localhost:5000/category?category=${selectedTab}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setToys(data)
                setIsTrue(false)
            })
    }, [selectedTab])

    if (istrue) {
        return (
            <figure className="w-full">
                <img src={gif} alt="" className="mx-auto rounded-full w-36 mt-16" />
            </figure>
        );
    }

    return (
        <div className="grid md:grid-cols-3 gap-8 my-10">
            {
                toys.map(toy => <div key={toy._id} className="card card-side bg-base-100 shadow-xl w-full">
                    <figure className="w-2/5"><img src={toy?.img} alt="toy" className="object-fill h-full" /></figure>
                    <div className="card-body w-3/5">
                        <h2 className="card-title">{toy.toyName}</h2>
                        <p>Price: ${toy.price}</p>
                        <div className="flex items-center gap-3">
                            <Rating
                                style={{ maxWidth: 120 }}
                                value={toy.rating}
                                readOnly
                            />
                            <p>{toy.rating}</p>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn btn-ghost btn-xs bg-slate-200">details</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default TabContent;