import { useState } from 'react';
import { toast } from "react-hot-toast";
import Swal from 'sweetalert2';


const ModalBody = ({ modalData, setIsUpdate, isUpdate }) => {
    const { _id, img, toyName, price, rating, sellerName, subCategory, availableQuantity, sellerEmail, description } = modalData;

    const [selectValue, setSelectValue] = useState(subCategory);

    

    console.log(selectValue);


    const handleUpdateToy = event => {
        event.preventDefault()

        const form = event.target;
        const updateToyName = form.toyName.value;
        const updatePrice = form.price.value;
        const updateAvailableQuantity = form.quantity.value;
        const updateDescription = form.description.value;

        if (!/^\d+(\.\d{1,2})?$/.test(updatePrice)) {
            toast.error("The price must be given in number")
            form.price.focus()
            return;
        }

        if (!/^\d+$/.test(updateAvailableQuantity)) {
            toast.error("The Available quantity must be given in number")
            form.quantity.focus()
            return;
        }


        // const toy = { img, toyName, price, rating, sellerName, subCategory: selectValue, availableQuantity, sellerEmail, description };

        const updateToy = { img, toyName: updateToyName, price: updatePrice, rating, sellerName, subCategory, availableQuantity: updateAvailableQuantity, sellerEmail, description: updateDescription };

        console.log(updateToy);

        fetch(`http://localhost:5000/updateToy/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'TOY Updated!',
                        ' ',
                        'success'
                    )
                    setIsUpdate(!isUpdate)
                }
            })


    }

    



    return (
        <div className="w-10/12 mx-auto">
            <h1 className="md:text-5xl font-bold text-center text-gray-200 md:mb-16 mb-10">UPDATE YOUR TOY</h1>

            <form onSubmit={handleUpdateToy} className="">
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="selerName" defaultValue={sellerName} id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " readOnly />
                        <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your name</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="email" name="email" defaultValue={sellerEmail} id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " readOnly />
                        <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">

                        <input type="text" name="toyName" defaultValue={toyName} id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Toy name</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">

                        <label htmlFor="underline_select" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Select category</label>

                        <select value={subCategory} onChange={(e) => setSelectValue(e.target.value)} id="underline_select" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer" readOnly>

                            <option value="Die-Cast Vehicles" className='text-gray-900'>
                                Die-Cast Vehicles</option>
                            <option value="Track Sets" className='text-gray-900'>
                                Track Sets</option>
                            <option value="Premium" className='text-gray-900'>
                                Premium</option>

                        </select>

                    </div>
                </div>

                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="url" name="toyPhotoURL" defaultValue={img} id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " readOnly />
                        <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Toy photo URL</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="price" defaultValue={price} id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="quantity" defaultValue={availableQuantity} id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Available quantity</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="rating" defaultValue={rating} id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " readOnly />
                        <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Rating</label>
                    </div>

                </div>

                <div className="relative z-0 w-full mb-6 group">
                    <textarea className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer placeholder:text-white" name="description" defaultValue={description} placeholder="Detail description" cols="30" rows="1" required></textarea>

                </div>



                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm w-full text-center md:mt-16">
                    <label htmlFor="my-modal-5" className='w-full flex text-center justify-center py-3'>Save & Close</label>
                </button>
            </form>

        </div>
    );
};

export default ModalBody;