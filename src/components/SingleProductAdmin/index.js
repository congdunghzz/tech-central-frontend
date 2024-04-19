
import { Link } from "react-router-dom";
import { useState, useEffect, memo } from "react";

import ProductModal from "../ProductModal";

function SingleProductAdmin({product, categories, brands}) {
    
    const [productItem, setProductItem] = useState(product)
    
    const reRenderProduct = (product) => {
        setProductItem(product);
    };
    useEffect(() => {
        setProductItem(product);
    }, [product]);
    return (
        <>
            <tr key={product.id}>
                <td>
                    <div className="basic-info">
                        <Link to={`/product/${productItem.id}`} className="text-decoration-none text-dark">
                            {productItem.productImages[0] ?
                                (<img className="mh-100" src={`${productItem.productImages[0]['url']}`} alt="Product image"></img>)
                                :
                                (<img className="mh-100 " src="" alt="Product image" />)}
                        </Link>
                    </div>
                </td>
                <td>{productItem.id}</td>
                <td>{productItem.name}</td>
                <td>{productItem.price}</td>
                <td>{productItem.brand}</td>
                <td>{productItem.category}</td>
                <button className="btn btn-secondary ms-auto" type="button" data-bs-toggle="modal" data-bs-target={`#staticBackdrop-${productItem.id}`} >---</button>

            </tr>
            
            <ProductModal data={productItem} setProduct = {reRenderProduct} categories={categories} brands={brands}/>
        </>
    );

}

export default SingleProductAdmin;