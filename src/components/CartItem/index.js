import { Link } from "react-router-dom";
import { useState } from "react";
import "./Cart.css"

function CartItem (){

    const [amount, setAmount] = useState(1);

    const productPrice = 1500;

    function  handleIncrement(state) {
        switch (state) {
            case "PLUS":
                setAmount(amount + 1);
                break;
            case "MINUS":
                if(amount <= 1) break;
                setAmount(amount - 1);        
        }
    }

    return (
        <>
            <div className="item-row row align-items-center">

                <div className="basic-info col-3   d-flex">
                    <Link to ="/product/productId/" className="text-decoration-none text-dark">
                        <img className="mh-100 " src="https://anphat.com.vn/media/lib/05-04-2023/mbpro.jpg"></img>
                    </Link>
                    <div className="ms-3">
                        <Link to ="/product/productId/" className="text-decoration-none text-dark">
                            <h6 className="">MacBook Pro</h6>
                        </Link>
                        <p>{`$${1500}`}</p>
                    </div>
                </div>
                
                <div className="d-flex col-3   align-items-center justify-content-center">
                        <button className="btn btn-light border-dark" onClick={() => handleIncrement("MINUS")}>-</button>
                        <button className="btn btn-light border-dark" disabled>{amount}</button>
                        <button className="btn btn-light border-dark" onClick={() => handleIncrement("PLUS")}>+</button>

                </div>
                

                <div className="d-flex total-cost col-3   justify-content-center"><span>{"$" + productPrice*amount}</span></div>

                <div className="d-flex col-3   justify-content-center">
                    <svg stroke="currentColor" fill="currentColor" 
                            strokeWidth="0" viewBox="0 0 24 24" 
                            className=" delete-btn text-danger fs-4"
                            data-test="cart-remove-btn" height="1em" width="1em" 
                            xmlns="http://www.w3.org/2000/svg">
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