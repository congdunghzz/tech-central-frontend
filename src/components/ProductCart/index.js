import "./ProductCart.css"
import RatingStar from "../RatingStar";
import { Link } from "react-router-dom";
import ButtonAddToCart from "../ButtonAddToCart";

function ProductCart ( {key, showingType} ) {
    const onLinkClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    
    return (
        <div key={key} className={`${showingType} col-sm-8`}>
                    <div className="border border-secondary m-2 mb-2 border-opacity-25">
                        <div className="w-100">
                            <Link to={"/product/productId"} onClick={onLinkClick}>
                                <img className="mw-100 d-inline-block" src="https://anphat.com.vn/media/lib/05-04-2023/mbpro.jpg" alt="Product Image"></img>                     
                            </Link>
                            
                        </div>
                        <div className="product-content">

                        </div>
                        <div className="px-4 pt-3">
                            <p className="my-0 fw-light">Laptop</p>
                            <Link className="product-name text-dark fs-5 text" to="/product/productId" onClick={onLinkClick}>MacBook Pro</Link>
                            <RatingStar className="px-4"></RatingStar>

                        </div>

                        <div className="px-4 d-flex align-items-center pt-3 pb-3">
                            <h4 className="fst-italic text-primary me-4">$1500</h4>
                            <div className="ms-4">
                                <ButtonAddToCart name={"ADD TO CART"}/> 
                            </div>
                        </div>
                    </div>
                </div>
                
    );
}

export default ProductCart;