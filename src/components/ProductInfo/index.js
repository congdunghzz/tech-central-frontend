import { useState } from "react";

import "./ProductInfo.css"
import ButtonAddToCart from "../ButtonAddToCart";
import RatingStar from "../RatingStar";
import ProductDetail from "../ProductDetail";

function ProductInfo(){
    const [showDetail, setShowDetail] = useState(false);
        return (
        <>
            <div className="container-fluid pt-5">
                <div className="row">
                    <div className="d-flex col-lg-6 col-md-12 align-items-center justify-content-center">
                        <img className="mw-100 mb-4" src="https://cdn.techzones.vn/Data/Sites/1/News/4358/techzones-tim-hieu-nhung-diem-noi-bat-cua-apple-macbook-pro-14.png" alt="Product Image" />
                    </div>

                    <div className="info col-lg-6 col-md-12">
                        <h3>MacBook Pro</h3>
                        <RatingStar/>
                        <h4 className="fst-italic text-primary me-2 pt-3 ">$1500</h4>
                        <table className="mt-2">
                            <tbody>
                                <tr className="">
                                    <td className=" fw-bold pe-3 fs-6">Brand</td>
                                    <td>Apple</td>
                                </tr>
                                <tr className="">
                                    <td className=" fw-bold pe-3 fs-6">Category </td>
                                    <td>laptops</td>
                                </tr>
                                <tr className="">
                                    <td className=" fw-bold pe-3 fs-6">Stock</td>
                                    <td>83</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="mt-5 d-flex pb-5">
                            <ButtonAddToCart className="mt-4" name={"ADD TO CART"}/> 
                            <ButtonAddToCart className="mt-4" name={"BUY NOW"}/> 
                            <ButtonAddToCart className="mt-4" name={"LIKE"}/> 
                        </div>

                        { showDetail && <ProductDetail />}
                        <button type="button" className="btn btn-secondary" onClick={() => {setShowDetail(!showDetail)}}>
                            { showDetail ? "Shortcut" : "Show more"}
                        </button>
                    </div>

                </div>
            </div>
            <hr></hr>
        </>

    );
}

export default ProductInfo;