import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { CartItemQuantityContext } from "../../context/cartItemQuantity";
import CartItem from "../../components/CartItem";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./Cart.css"
function Cart() {
    const cartItemQuantityContext = useContext(CartItemQuantityContext);
    let cart = JSON.parse(window.localStorage.getItem("cart")) || [];
    const [cartItems, setCartItems] = useState(cart);

    const totalPrice = cartItems.reduce((total, item) => (total + item.price * item.amount), 0);
    useEffect(() =>{
        window.localStorage.setItem("cart", JSON.stringify(cartItems));
        cartItemQuantityContext.setQuantity(cartItems.length)
        console.log(cartItems.length);
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
                    <div className="d-grid gap-2 col-4 ms-auto">
                        <h4>Total cost: ${totalPrice}</h4>
                    </div>
                    <div className="d-grid gap-2 col-4 ms-auto">
                        { cart.length > 0 &&
                        <Link to="/checkout" className="w-100">
                            <button className="btn btn-primary w-100" type="button">Checkout</button>
                        </Link>}

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Cart;