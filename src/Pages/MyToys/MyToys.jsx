import { useContext, useEffect, useState } from "react";
import MyToysTR from "./MyToysTR";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyModal from "./MyModal";
import ModalBody from "./ModalBody";
import gif from '../../assets/142142-carhackdogs.gif'

const MyToys = () => {
    const { user, loading } = useContext(AuthContext)
    const [myToys, setMyToys] = useState([]);
    const [uniqueId, setUniqueId] = useState(null);
    const [modalData, setModalData] = useState({})
    const [isUpdate, setIsUpdate] = useState(false);
    const [isData, setIsData] = useState(true)



    useEffect(() => {
        fetch(`http://localhost:5000/myToys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyToys(data)
                setIsData(false)
            })
    }, [user, isUpdate])


    useEffect(() => {

        fetch(`http://localhost:5000/updateToy/${uniqueId}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setModalData(data)
            })
    }, [uniqueId])


    if (loading || isData ) {
        return (
            <div className="flex items-center justify-center h-screen">
                <img src={gif} alt="" className="mx-auto rounded-full w-36 mt-16" />
            </div>
        );
    }

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
                            setUniqueId={setUniqueId}
                            setIsUpdate={setIsUpdate}
                            isUpdate={isUpdate}
                        />)
                    }

                </tbody>
            </table>
            <MyModal>
                <ModalBody
                    modalData={modalData}
                    setIsUpdate={setIsUpdate}
                    isUpdate={isUpdate}
                ></ModalBody>
            </MyModal>


        </div>
    );
};

export default MyToys;