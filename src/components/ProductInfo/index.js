import { useEffect, useState } from "react";
import { useNavigate  } from "react-router-dom";
import "./ProductInfo.css"
import ButtonAddToCart from "../ButtonAddToCart";
import RatingStar from "../RatingStar";
import ProductDetail from "../ProductDetail";

function ProductInfo({ product }) {

    const [thumb, setThumb] = useState(0);
    const [showDetail, setShowDetail] = useState(false);

    const navigate = useNavigate();

    const handleChangeImage = (index) => {
        setThumb(index);
    }

    const handleBuyNowClick = () => {
        const item = {
            amount : 1,
            name : product.name,
            price : product.price,
            productId : product.id
        }
        navigate("/checkout", {state: item});
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
                                    <img key={image.id} className="thumb ms-1 mh-100" alt="thumb" src={image.url} onClick={() => { handleChangeImage(index) }} />
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
                            <ButtonAddToCart className="mt-4" product={product}/>
                            <button className="ms-2 btn custom-btn-pink custom-btn-outline-info fw-bold" onClick={handleBuyNowClick}>
                                <svg className="justify-content-center me-2 mb-1" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z">
                                    </path>
                                </svg>
                                BUY NOW
                            </button>
                            <button className="ms-2 btn custom-btn-pink custom-btn-outline-info fw-bold">
                                <svg className="justify-content-center me-2 mb-1" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z">
                                    </path>
                                </svg>
                                LIKE
                            </button>
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