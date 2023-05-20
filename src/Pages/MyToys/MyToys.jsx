import { useContext, useEffect, useState } from "react";
import MyToysTR from "./MyToysTR";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState([]);



    useEffect(() => {
        fetch(`http://localhost:5000/myToys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyToys(data)
            })
    }, [user])


    return (
        <div className="overflow-x-auto w-full my-20">
            <h1 className="text-5xl font-bold text-center text-gray-800">Discover Your Toys</h1>
            <p className="text-center text-base text-gray-500 font-semibold mt-1 mb-20"> My Toy Wonderland Explore Endless Playtime Adventures</p>
            <table className="table w-full my-20">
                {/* head */}
                <thead>
                    <tr>
                        <th>Toy image</th>
                        <th>Description</th>
                        <th>Seller</th>
                        <th>category</th>
                        <th>Price</th>
                        <th>Available</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row */}

                    {
                        myToys.map(toy => <MyToysTR
                            key={toy._id}
                            toy={toy}
                        />)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyToys;