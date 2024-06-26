import "./ProductCart.css"
import RatingStar from "../RatingStar";
import { Link } from "react-router-dom";
import ButtonAddToCart from "../ButtonAddToCart";

function ProductCart ( {key, showingType, product} ) {
    const onLinkClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    
    return (
        <div key={key} className={`${showingType} col-sm-8 `}>
                    <div className="border border-secondary m-2 mb-2 border-opacity-25 w-100 ">
                        <div className="w-100 d-flex justify-content-center align-items-center" style={{height:"240px"}}>
                            <Link to={`/product/${product.id}`} onClick={onLinkClick} className="h-100">
                                <img className="mw-100 h-100 d-inline-block" src={`${product.productImages[0]['url']}`} alt="Product Image"></img>                     
                            </Link>
                            
                        </div>
                        <div className="product-content">

                        </div>
                        <div className="px-4 pt-3">
                            <p className="my-0 fw-light">{product.category}</p>
                            <Link className="product-name text-dark fs-5 text" to="/product/productId" onClick={onLinkClick}>{product.name}</Link>
                            <RatingStar className="px-4"></RatingStar>

                        </div>

                        <div className="px-4 d-flex align-items-center pt-3 pb-3">
                            <h4 className="fst-italic text-primary me-4">{`$${product.price}`}</h4>
                            <div className="ms-4">
                                <ButtonAddToCart product={product}/> 
                            </div>
                        </div>
                    </div>
                </div>
                
    );
}

export default ProductCart;