import { useEffect, useState } from "react";

import "./ProductInfo.css"
import ButtonAddToCart from "../ButtonAddToCart";
import RatingStar from "../RatingStar";
import ProductDetail from "../ProductDetail";

function ProductInfo({ product }) {

    const [thumb, setThumb] = useState(0);
    const [showDetail, setShowDetail] = useState(false);

    const handleChangeImage = (index) => {
        setThumb(index);
    }

    useEffect(() => {
        setThumb(0);
    }, [product]);

    return (
        <>
            <div className="container-fluid pt-5">
                <div className="row">
                    <div className="col-lg-6 col-md-6  justify-content-center mb-4 ps-5" >
                        <img className="mw-100 mb-2 "
                            src={product.productImages[thumb] && `${product.productImages[thumb]['url']}`} 
                            alt="Product Image"
                            style={{ height: "480px" }} />
                        <div className="thumb-list d-flex align-items-center ps-5">
                            {
                                product.productImages.map((image, index) => (
                                    <img key={image.id} className="thumb ms-1" alt="thumb" src={image.url} onClick={() => { handleChangeImage(index) }} />
                                ))
                            }
                        </div>
                    </div>
                    <div className="info col-lg-6 col-md-6">
                        <h3>{product.name}</h3>
                        <RatingStar />
                        <h4 className="fst-italic text-primary me-2 pt-3 ">{`$${product.price}`}</h4>
                        <table className="mt-2">
                            <tbody>
                                <tr className="">
                                    <td className=" fw-bold pe-3 fs-6">Brand</td>
                                    <td>{product.brand}</td>
                                </tr>
                                <tr className="">
                                    <td className=" fw-bold pe-3 fs-6">Category </td>
                                    <td>{product.category}</td>
                                </tr>
                                <tr className="">
                                    <td className=" fw-bold pe-3 fs-6">Stock</td>
                                    <td>83</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="mt-5 d-flex pb-5">
                            <ButtonAddToCart className="mt-4" name={"ADD TO CART"} />
                            <ButtonAddToCart className="mt-4" name={"BUY NOW"} />
                            <ButtonAddToCart className="mt-4" name={"LIKE"} />
                        </div>

                        {showDetail && <ProductDetail productDetail={product.productDetail} />}
                        <button type="button" className="btn btn-secondary" onClick={() => { setShowDetail(!showDetail) }}>
                            {showDetail ? "Show less" : "Show more"}
                        </button>
                    </div>

                </div>
            </div>
            <hr></hr>
        </>

    );
}

export default ProductInfo;