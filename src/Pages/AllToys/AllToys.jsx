import { useEffect, useState } from "react";
import TableRow from "./TableRow";

const AllToys = () => {
    const [toys, setToys] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetch('https://wheel-whiz-server.vercel.app/allToys')
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [])


    const handleSearch = ()=>{
        fetch(`https://wheel-whiz-server.vercel.app/toyNameSearch/${searchText}`)
        .then(res=> res.json())
        .then(data=>{
            setToys(data)
        })
    }

    return (
        <div className="overflow-x-auto w-full">
            <div className="text-center my-5">
                <input
                    onChange={(e) => setSearchText(e.target.value)}
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-primary w-full max-w-xs" />

                <button onClick={handleSearch} className="btn ml-3">Search</button>
            </div>
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
                        toys.map(toy => <TableRow
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