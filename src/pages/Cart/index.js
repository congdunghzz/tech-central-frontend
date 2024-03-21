import CartItem from "../../components/CartItem";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./Cart.css"
function Cart (){
    return (
        <>
            <Header/>
            <div className="container min-vh-75">
                <CartItem/>     
            </div>
            <Footer/>
        </>
    );
}

export default Cart;