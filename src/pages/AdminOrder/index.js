import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as orderService from "../../services/orderService";

import "./adminOrder.css"

function AdminOrder() {
    const navigate = useNavigate();

    const [status, setStatus] = useState('');
    const [orderList, setOrderList] = useState([]);
    const [showingDetail, setShowingDetail] = useState(0);


    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);


    const generatePageNumbers = () => {
        let pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
        return pages;
    }

    const changePageClick = (page) => {
        if (page > totalPages || page < 1) {
            return;
        }
        setCurrentPage(page);
    }

    const handleShowingDetail = (orderId) => {
        if (orderId === showingDetail) {
            setShowingDetail(0);
            return;
        }
        setShowingDetail(orderId);
    }

    const handleCancelOrder = async (orderId) => {
        if (!window.confirm('Are you sure you want')) return;
        const res = await orderService.cancelOrder(orderId);
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

    const handleFinishOrder = async (orderId) => {
        if (!window.confirm('You have received the order')) return;
        const res = await orderService.finishOrder(orderId);
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

    const handleAcceptOrder = async (orderId) => {
        if (!window.confirm('Are you sure you want')) return;
        const res = await orderService.acceptOrder(orderId);
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

    
    const handleStatusClick = (st) => {
        setStatus(st);
        setCurrentPage(1);

    };
    const getAllOrders = async () => {
        const res = await orderService.getAllOrders(status, currentPage, 10);

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
        setOrderList(res.data.content);
        setTotalPages(res.data.totalPages);
    };

    useEffect(() => {
        getAllOrders();
    }, [status, currentPage]);

    return (
        <div className="row align-items-center d-flex ">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className={`nav-link  ${status === '' ? 'active' : ''}`} href="#" onClick={() => { handleStatusClick('') }}>All</a>
                </li>
                <li className='nav-item'>
                    <a className={`nav-link  ${status === 'PROCESSING' ? 'active' : ''}`} href="#" onClick={() => { handleStatusClick('PROCESSING') }} >On Process</a>
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



                                                        {order.orderStatus !== 'CANCELED' && order.orderStatus !== 'FINISH' &&
                                                            <button className="btn btn-danger me-3" onClick={() => {handleCancelOrder(order.id)}}>Cancel This Order</button>
                                                        }
                                                        {order.orderStatus === 'PROCESSING' &&
                                                            <button className="btn btn-success me-3" onClick={() => {handleAcceptOrder(order.id)}}>Accept</button>
                                                        }
                                                        {order.orderStatus === 'CANCELED' &&
                                                            <button className="btn btn-secondary me-3" disabled>Canceled</button>
                                                        }
                                                        {order.orderStatus === 'SHIPPING' &&
                                                            <button className="btn btn-success me-3" onClick={() => { handleFinishOrder(order.id)}}>Finish</button>
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
            <nav aria-label="Page navigation example text-center">
                        <div className="d-flex justify-content-center w-100 my-4">

                            <ul className="pagination">
                                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                    <a className="page-link" href="#"
                                        onClick={() => { changePageClick(currentPage - 1) }}>Previous</a>
                                </li>
                                {
                                    generatePageNumbers().map(i => (
                                        <li key={i}
                                            className={`page-item ${currentPage === i ? 'active' : ''}`}>
                                            <a className="page-link" href="#"
                                                onClick={() => { changePageClick(i) }}>{i}</a>
                                        </li>
                                    ))
                                }

                                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}
                                >
                                    <a className="page-link" href="#"
                                        onClick={() => { changePageClick(currentPage + 1) }}>Next</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
        </div>
    );
}

export default AdminOrder;
