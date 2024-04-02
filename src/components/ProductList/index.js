import "./ProductList.css"
import ProductCart from "../ProductCart";

function ProductList({title, showingType, products}) {

    
    return (
        <div className="product-list container-fluid my-4 px-3">
            <div className="">
                <h2 className="product-list-title">{title}</h2>
            </div>

            <div className="row mt-3">
                
                {products.map((product, index) => (<ProductCart key={index} showingType={showingType} product={product}/>))}
               
            </div>
        </div>
    );
}

export default ProductList;