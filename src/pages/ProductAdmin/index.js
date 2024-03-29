import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SingleProductAdmin from "../../components/SingleProductAdmin";
import * as productService from "../../services/productService";
import ProductModal from "../../components/ProductModal";



export const initProduct =   {
    "id": 0,
    "name": "",
    "price": 0,
    "productImages": [
      
    ],
    "productDetail": {
      "id": 0,
      "cpu": "",
      "ram": 0,
      "rom": 0,
      "screen": 0,
      "resolution": "",
      "material": "",
      "color": ""
    },
    "category": "",
    "brand": ""
  }
function ProductAdmin() {

    const [productList, setProductList] = useState([]);

    const getProductList = async () => {
        const {data} = await productService.getProducts();
        setProductList(data);
    }
    useEffect(() => {
        getProductList();
    }, []);


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
                    {
                        productList.map(product => (<SingleProductAdmin product = {product}/>))
                    }
                    
                </tbody>
            </table>
             <ProductModal data = {initProduct}/> 
        </div>
    );
}

export default ProductAdmin;