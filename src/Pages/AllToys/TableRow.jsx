const TableRow = ({toy}) => {
    const {img, toyName, price, sellerName, subCategory, availableQuantity, sellerEmail} = toy;

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
                <button className="btn btn-ghost btn-xs bg-slate-200">details</button>
            </th>
        </tr>
    );
};

export default TableRow;