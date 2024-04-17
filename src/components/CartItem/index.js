import { Link } from "react-router-dom";
import { useState } from "react";
import {  } from "../../context/cartItemQuantity";

import "./Cart.css"

function CartItem({ item, cartItems, setCartItems }) {

    const [amount, setAmount] = useState(item.amount);

    const productPrice = item.price;

    function handleIncrement(state) {
        switch (state) {
            case "PLUS":
                changeProductAmountInStorage(amount + 1);
                setAmount(amount + 1);
                break;
            case "MINUS":
                if (amount <= 1) break;
                changeProductAmountInStorage(amount - 1);
                setAmount(amount - 1);
        }
    }

    const changeProductAmountInStorage = (quantity) => {
        const updatedCartItems = [...cartItems]
        const existingProductIndex = updatedCartItems.findIndex(i => i.productId === item.productId);

        if (existingProductIndex !== -1) {
            updatedCartItems[existingProductIndex].amount = quantity;
            setCartItems(updatedCartItems);
        }
    }

    const handleDeleteItem = () => {
        const updatedCartItems = [...cartItems]
        const existingProductIndex = updatedCartItems.findIndex(i => i.productId === item.productId);

        if (existingProductIndex !== -1) {
            updatedCartItems.splice(existingProductIndex, 1);
            setCartItems(updatedCartItems);
        }
    }


    return (
        <>
            <div className="item-row row align-items-center">

                <div className="basic-info col-3   d-flex">
                    <Link to={`/product/${item.productId}`} className="text-decoration-none text-dark">
                        <img className="mh-100 " src={item.productImage}></img>
                    </Link>
                    <div className="ms-3">
                        <Link to="/product/productId/" className="text-decoration-none text-dark">
                            <h6 className="">{item.name}</h6>
                        </Link>
                        <p>{`$${item.price}`}</p>
                    </div>
                </div>

                <div className="d-flex col-3   align-items-center justify-content-center">
                    <button className="btn btn-light border-dark" onClick={() => handleIncrement("MINUS")}>-</button>
                    <button className="btn btn-light border-dark" disabled>{amount}</button>
                    <button className="btn btn-light border-dark" onClick={() => handleIncrement("PLUS")}>+</button>

                </div>


                <div className="d-flex total-cost col-3   justify-content-center"><span>{"$" + productPrice * amount}</span></div>

                <div className="d-flex col-3   justify-content-center">
                    <svg stroke="currentColor" fill="currentColor"
                        strokeWidth="0" viewBox="0 0 24 24"
                        className=" delete-btn text-danger fs-4"
                        data-test="cart-remove-btn" height="1em" width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={handleDeleteItem}>
                        <path d="M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z">
                        </path>
                    </svg>
                </div>

            </div>

            <hr></hr>
        </>



    );
}

export default CartItem;