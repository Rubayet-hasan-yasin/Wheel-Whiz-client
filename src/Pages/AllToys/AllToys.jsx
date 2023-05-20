import { useEffect, useState } from "react";
import TableRow from "./TableRow";

const AllToys = () => {
    const [toys, setToys] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/allToys')
        .then(res=> res.json())
        .then(data=> {
            setToys(data)
        })
    },[])



    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>Toy image</th>
                        <th>Seller Name</th>
                        <th>category</th>
                        <th>Price</th>
                        <th>Available</th>
                        <th></th>
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