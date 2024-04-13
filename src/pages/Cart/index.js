import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CartItem from "../../components/CartItem";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./Cart.css"
function Cart() {

    let cart = JSON.parse(window.localStorage.getItem("cart")) || [];
    const [cartItems, setCartItems] = useState(cart);

    const totalPrice = cartItems.reduce((total, item) => (total + item.price * item.amount), 0);
    useEffect(() =>{
        window.localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <>
            <Header />
            <div className="container min-vh-75 py-4">
                {
                    cartItems.map(item => (
                        (<CartItem item={item} cartItems={cartItems} setCartItems={setCartItems}/>)
                    ))
                }
                <div className="mt-4">
                    <div class="d-grid gap-2 col-4 ms-auto">
                        <h4>Total cost: ${totalPrice}</h4>
                    </div>
                    <div className="d-grid gap-2 col-4 ms-auto">
                        <Link to="/checkout" className="w-100">
                            <button className="btn btn-primary w-100" type="button">Checkout</button>
                        </Link>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Cart;