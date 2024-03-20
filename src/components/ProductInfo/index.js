import "./ProductInfo.css"

import ButtonAddToCart from "../ButtonAddToCart";
import RatingStar from "../RatingStar";

function ProductInfo(){
    return (
        <>
            <div className="container-fluid pt-5">
                <div className="row">
                    <div className="d-flex col-lg-6 col-md-12 align-items-center justify-content-center">
                        <img className="mw-100" src="https://cdn.dummyjson.com/product-images/9/thumbnail.jpg" alt="Product Image" />
                    </div>

                    <div className="info col-lg-6 col-md-12">
                        <h3>MacBook Pro</h3>
                        <RatingStar/>
                        <h4 className="fst-italic text-primary me-2 pt-3 ">$1500</h4>
                        <table class="mt-2">
                            <tbody>
                                <tr className="">
                                    <td class=" fw-bold pe-3 fs-6">Brand</td>
                                    <td>Apple</td>
                                </tr>
                                <tr className="">
                                    <td class=" fw-bold pe-3 fs-6">Category </td>
                                    <td>laptops</td>
                                </tr>
                                <tr className="">
                                    <td class=" fw-bold pe-3 fs-6">Stock</td>
                                    <td>83</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="mt-5 d-flex">
                            <ButtonAddToCart className="mt-4" name={"ADD TO CART"}/> 
                            <ButtonAddToCart className="mt-4" name={"BUY NOW"}/> 
                            <ButtonAddToCart className="mt-4" name={"LIKE"}/> 
                        </div>
                    </div>

                </div>
            </div>
            <hr></hr>
        </>

    );
}

export default ProductInfo;