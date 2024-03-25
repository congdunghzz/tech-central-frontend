import ProductList from "../../components/ProductList";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Categories from "../../components/Categories";
function Product (){

    return (
        <>
            <Header />
            <div className="product-page, container-fluid">
                <Categories />
                <div className="row">
                    <div className=" col-md-2 col-sm-12">

                    </div>
                    <div className=" col-md-10 col-sm-12  container-fluid">
                        <ProductList showingType={'col-xxl-4 col-xl-4 col-lg-6 col-md-6'}/>
                        <ProductList showingType={'col-xxl-4 col-xl-4 col-lg-6 col-md-6'}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Product;