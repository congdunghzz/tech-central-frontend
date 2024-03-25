import ProductList from "../../components/ProductList";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
function Product (){

    return (
        <>
            <Header />
            <div className="product-page, container-fluid">
                <div className="row">
                    <div className="col-2">

                    </div>
                    <div className="col-10 container-fluid">
                        <ProductList/>
                        <ProductList/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Product;