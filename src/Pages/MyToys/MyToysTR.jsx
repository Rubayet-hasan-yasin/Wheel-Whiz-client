import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";




const MyToysTR = ({ toy, setUniqueId, setIsUpdate, isUpdate }) => {
    const { _id, img, toyName, price, sellerName, subCategory, availableQuantity, sellerEmail, description } = toy;


    const handleDeleteToy = id => {


        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://wheel-whiz-server.vercel.app/deleteToy/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            setIsUpdate(!isUpdate)

                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })



    }


    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-24 h-24">
                            <img src={img} alt="toy img" />
                        </div>
                    </div>
                    <div>
                        <h1 className="font-bold">{toyName.split(' ').length > 6 ? toyName.split(" ").slice(0, 7).join(' ') : toyName}</h1>
                    </div>
                </div>
            </td>
            <td>
                <p title="Click for full description" className="badge badge-ghost">
                    {
                        description.split(' ').slice(0, 6).join(' ')
                    }....
                </p>
            </td>
            <td>
                <div>
                    <div className="font-bold">{sellerName}</div>
                    <div className="text-sm opacity-50">{sellerEmail}</div>
                </div>
            </td>
            <td>
                <p className="badge badge-ghost badge-sm">{subCategory}</p>
            </td>
            <td>${price}</td>
            <td>{availableQuantity}</td>
            <th>
                <label onClick={() => setUniqueId(_id)} htmlFor="my-modal-5" className="btn btn-ghost btn-xs bg-slate-200 mx-1">
                    <FaEdit className="w-5 h-5" /></label>

                <button onClick={() => handleDeleteToy(_id)} className="btn btn-ghost btn-xs bg-slate-200 mx-1"><AiFillDelete className="w-5 h-5" /></button>

            </th>
        </tr>

    );
};

export default MyToysTR;