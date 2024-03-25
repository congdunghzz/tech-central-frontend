import "./ProductList.css"
import ProductCart from "../ProductCart";

function ProductList({title, showingType}) {

    let products = [1,2,3,4,5,6,7,8]
    return (
        <div className="product-list container-fluid my-4 px-3">
            <div className="">
                <h2 className="product-list-title">{title}</h2>
            </div>

            <div className="row mt-3">
                
                {products.map((product, index) => (<ProductCart key={index} showingType={showingType}/>))}
               
            </div>
        </div>
    );
}

export default ProductList;