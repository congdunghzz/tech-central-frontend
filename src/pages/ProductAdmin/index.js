import { Link } from "react-router-dom";

import SingleProductAdmin from "../../components/SingleProductAdmin";
import * as productService from "../../services/productService";

function ProductAdmin(productList) {
    productService.getProducts();
    return (
        <div className="row align-items-center d-flex ">
            <div className=" r-0">
                <button type="button" className="btn btn-success btn-lg ms-auto r-0" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Product</button>
            </div>

            <table className="table table-hover ms-3">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Category</th>
                    </tr>
                </thead>
                <tbody>
                    <SingleProductAdmin/>   
                    <SingleProductAdmin/>   
                </tbody>
            </table>
        </div>
    );
}

export default ProductAdmin;