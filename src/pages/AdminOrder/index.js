import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as orderService from "../../services/orderService";

import "./adminOrder.css"

function AdminOrder() {
    const navigate = useNavigate();

    const [status, setStatus] = useState('');
    const [orderList, setOrderList] = useState([]);
    const [showingDetail, setShowingDetail] = useState(0);


    const handleShowingDetail = (orderId) => {
        if (orderId === showingDetail) {
            setShowingDetail(0);
            return;
        }
        setShowingDetail(orderId);
    }

    const changeStatus = (e) => {
        if (window.confirm("Change the order status to " + e.target.value)) {

        }
    }

    const orderStatuses = ['PROCESSING', 'SHIPPING', 'FINISHED', 'CANCELED'];

    const handleStatusClick = (st) => {
        setStatus(st);

    };
    const getAllOrders = async () => {
        const res = await orderService.getAllOrders(status);
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
        setOrderList(res.data);
    };

    useEffect(() => {
        getAllOrders();
    }, [status]);

    return (
        <div className="row align-items-center d-flex ">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className={`nav-link  ${status === '' ? 'active' : ''}`} href="#" onClick={() => { handleStatusClick('') }}>All</a>
                </li>

                <li className='nav-item'>
                    <a className={`nav-link  ${status === 'SHIPPING' ? 'active' : ''}`} href="#" onClick={() => { handleStatusClick('SHIPPING') }} >On Deliver</a>
                </li>
                <li className='nav-item'>
                    <a className={`nav-link  ${status === 'FINISHED' ? 'active' : ''}`} href="#" onClick={() => { handleStatusClick('FINISHED') }} >Delivered</a>
                </li>
                <li className='nav-item'>
                    <a className={`nav-link  ${status === 'CANCELED' ? 'active' : ''}`} href="#" onClick={() => { handleStatusClick('CANCELED') }} >Canceled</a>
                </li>



            </ul>
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

                                                        <select type="text" aria-label="First name" className="form-control w-25" onChange={changeStatus}>
                                                            <option value={order.orderStatus}>{order.orderStatus}</option>
                                                            {
                                                                orderStatuses
                                                                    .filter(status => status !== order.orderStatus)
                                                                    .map((status, index) => (
                                                                        <option key={index} value={status}>{status}</option>
                                                                    ))
                                                            }
                                                        </select>
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

export default AdminOrder;
