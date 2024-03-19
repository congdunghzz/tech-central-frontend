import "./ProductList.css"
import ProductCart from "../ProductCart";

function ProductList() {

    let products = [1,2,3,4,5,6,7,8]
    return (
        <div className="product-list container-fluid my-4 px-3">
            <div className="">
                <h2 className="product-list-title">Trending Products</h2>
            </div>

            <div className="row mt-3">
                
                {products.map(product => (<ProductCart/>))}
               

            </div>
        </div>
    );
}

export default ProductList;