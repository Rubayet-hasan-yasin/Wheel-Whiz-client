import { useEffect, useState } from "react";
import TableRow from "./TableRow";

const AllToys = () => {
    const [toys, setToys] = useState([]);

    useEffect(()=>{
        fetch('https://wheel-whiz-server.vercel.app/allToys')
        .then(res=> res.json())
        .then(data=> {
            setToys(data)
        })
    },[])



    return (
        <div className="overflow-x-auto w-full my-20">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>Toy image</th>
                        <th>Seller</th>
                        <th>category</th>
                        <th>Price</th>
                        <th>Available</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row */}

                    {
                        toys.map(toy=> <TableRow 
                            key={toy._id}
                            toy={toy}
                            />)
                    }
                    
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;