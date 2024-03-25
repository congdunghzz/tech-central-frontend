import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Checkout from "../CheckoutPage";
import "./Cart.css"
function Cart (){
    return (
        <>
            <Header/>
            <div className="container min-vh-75 py-4">
                {<CartItem/>}     
                <div className="mt-4">
                    <div class="d-grid gap-2 col-4 ms-auto">
                        <h4>Total cost: $1500</h4>
                    </div>
                        <div className="d-grid gap-2 col-4 ms-auto">
                            <Link to= "/checkout" className="w-100">

                                <button class="btn btn-primary w-100" type="button">Checkout</button>    
                            </Link>

                        </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Cart;