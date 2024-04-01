
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import ProductModal from "../ProductModal";

function SingleProductAdmin(product) {
    const data = product.product;
    const [productItem, setProductItem] = useState({})
    return (
        < >
            <tr key={data.id}>
                <td>
                    <div className="basic-info">
                        <Link to="/product/productId/" className="text-decoration-none text-dark">
                            {data.productImages[0] ?
                                (<img className="mh-100" src={`${data.productImages[0]['url']}`} alt="Product image"></img>)
                                :
                                (<img className="mh-100 " src="" alt="Product image" />)}
                        </Link>
                    </div>
                </td>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.price}</td>
                <td>{data.brand}</td>
                <td>{data.category}</td>
                <button className="btn btn-secondary ms-auto" type="button" data-bs-toggle="modal" data-bs-target={`#staticBackdrop-${data.id}`} >---</button>

            </tr>
            <ProductModal data={data} />
        </>
    );

}

export default SingleProductAdmin;