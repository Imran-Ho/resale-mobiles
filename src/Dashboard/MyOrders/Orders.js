import React from 'react';

const Orders = ({ order }) => {
    const {phoneModel, resalePrice
    } = order;
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th>1</th>
                            <td>
                                <div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src="https://placeimg.com/192/192/people" />
                                    </div>
                                </div>
                            </td>
                            <td>{phoneModel}</td>
                            <td>{resalePrice}</td>
                            <td>{resalePrice}</td>
                        </tr>

                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;