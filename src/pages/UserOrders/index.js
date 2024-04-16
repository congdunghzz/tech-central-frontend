import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getMyOrders, cancelOrder, finishOrder } from "../../services/orderService";


function UserOrder() {
    const navigate = useNavigate();

    const [orderList, setOrderList] = useState([]);
    const [showingDetail, setShowingDetail] = useState(0);


    const handleShowingDetail = (orderId) => {
        if (orderId === showingDetail) {
            setShowingDetail(0);
            return;
        }
        setShowingDetail(orderId);
    }


    const handleCancelClick = async (orderId) => {
        if (!window.confirm('Are you sure you want')) return;
        const res = await cancelOrder(orderId);
        console.log(res);
        if (res?.status === 403) {
            alert("You need to login");
            navigate('/login');
            return
        }
        if (res?.status !== 403 && res?.status >= 400 && res?.status < 500) {
            alert(res.data.message);
            return
        }
        if (res?.status >= 500) {
            alert("Something went wrong on server side");
            return
        }
        getAllOrders();
    }

    const handleFinishOrderClick = async (orderId) => {
        const res = await finishOrder(orderId);
        if (res?.status === 403) {
            alert("You need to login");
            navigate('/login');
            return
        }
        if (res?.status !== 403 && res?.status >= 400 && res?.status < 500) {
            alert(res.data.message);
            return
        }
        if (res?.status >= 500) {
            alert("Something went wrong on server side");
            return
        }
        getAllOrders();
    }

    const getAllOrders = async () => {
        const res = await getMyOrders();
       

        if (res?.status === 403) {
            alert("You need to login");
            navigate('/login');
            return
        }
        if (res?.status !== 403 && res?.status >= 400 && res?.status < 500) {
            alert(res.data.message);
            return
        }
        if (res?.status >= 500) {
            alert("Something went wrong on server side");
            return
        }
        setOrderList(res.data);
    };

    useEffect(() => {
        getAllOrders();
    }, []);

    return (
        <div className="row align-items-center d-flex ">
            <table className="table table-hover ms-3 mt-5 ">
                <thead>
                    <tr>
                        <th scope="col">Order ID</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Order Date</th>
                        <th scope="col">Total</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>

                {
                    orderList ?
                        (<tbody className="">
                            {
                                orderList.map((order) => (
                                    <>
                                        <tr key={order.id} className="" onClick={() => { handleShowingDetail(order.id) }}>
                                            <td>{order.id}</td>
                                            <td>{order.orderDetails[0]['productName']},...</td>
                                            <td>{order.name}</td>
                                            <td>{order.orderDate}</td>
                                            <td>${order.totalCost}</td>
                                            <td>{order.orderStatus}</td>
                                        </tr>
                                        {showingDetail === order.id && (
                                            <tr>
                                                <td colSpan="6">
                                                    <div className="order-detail shadow p-3 mb-5 bg-body-tertiary rounded  mt-1 ">
                                                        <table className="">
                                                            <tbody>
                                                                <tr className="">
                                                                    <td className=" fw-bold pe-3 fs-6">Address</td>
                                                                    <td>{order.address}</td>
                                                                </tr>
                                                                <tr className="">
                                                                    <td className=" fw-bold pe-3 fs-6">Phone </td>
                                                                    <td>{order.phone}</td>
                                                                </tr>
                                                                <tr className="">
                                                                    <td className=" fw-bold pe-3 fs-6">Items: </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <table className="table ">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">Product name</th>
                                                                    <th scope="col">Price</th>
                                                                    <th scope="col">Quantity</th>
                                                                    <th scope="col">Amount</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>

                                                                {
                                                                    order.orderDetails.map((detail) => (
                                                                        <tr>
                                                                            <td>{detail['productName']}</td>
                                                                            <td>${detail['productPrice']}</td>
                                                                            <td>{detail['amount']}</td>
                                                                            <td>${detail['cost']}</td>
                                                                        </tr>
                                                                    ))
                                                                }

                                                            </tbody>
                                                        </table>
                                                        {order.orderStatus === 'PROCESSING' &&
                                                            <button className="btn btn-danger" onClick={() => {handleCancelClick(order.id)}}>Cancel This Order</button>
                                                        }
                                                        {order.orderStatus === 'CANCELED' &&
                                                            <button className="btn btn-secondary" disabled>Canceled</button>
                                                        }
                                                        {order.orderStatus === 'SHIPPING' &&
                                                            <button className="btn btn-success" onClick={() => {handleFinishOrderClick(order.id)}}>I Have Received The Goods</button>
                                                        }
                                                        {order.orderStatus === 'FINISHED' &&
                                                            <button className="btn btn-success me-3" disabled>Finished</button>
                                                        }
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                    </>
                                ))
                            }
                        </tbody>)
                        :
                        <div>
                            There is no order
                        </div>
                }
            </table>
        </div>
    );
}

export default UserOrder;
