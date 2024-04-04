
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import ProductModal from "../ProductModal";

function SingleProductAdmin(product) {
    const data = product.product;
    const [productItem, setProductItem] = useState(data)
    console.log("re-render");
    return (
        < >
            <tr key={data.id}>
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
            <ProductModal data={data} setProductItem = {setProductItem}/>
        </>
    );

}

export default SingleProductAdmin;