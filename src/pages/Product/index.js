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
                       <div className="mt-4">
                            <h4>Brand</h4>
                            
                            <div className="  ps-4 list-group list-group-flush justify-content-center" role="tablist">
                                <a className="list-group-item list-group-item-action active"  data-bs-toggle="list" role="tab" aria-controls="list-home">All</a>
                                <a className="list-group-item list-group-item-action"  data-bs-toggle="list" role="tab" aria-controls="list-profile">Apple</a>
                                <a className="list-group-item list-group-item-action"  data-bs-toggle="list" role="tab" aria-controls="list-messages">Samsung</a>
                                <a className="list-group-item list-group-item-action"  data-bs-toggle="list" role="tab" aria-controls="list-settings">Lenovo</a>
                            </div>
                       </div>
                       <div className="mt-4">
                            <h4>Price</h4>
                            
                            <div className="  ps-4 list-group list-group-flush justify-content-center" role="tablist">
                                <a className="list-group-item list-group-item-action active"  data-bs-toggle="list" role="tab" aria-controls="list-home">All</a>
                                <a className="list-group-item list-group-item-action"  data-bs-toggle="list" role="tab" aria-controls="list-profile"> {`<`} $2000</a>
                                <a className="list-group-item list-group-item-action"  data-bs-toggle="list" role="tab" aria-controls="list-messages">{`<`} $1500</a>
                                <a className="list-group-item list-group-item-action"  data-bs-toggle="list" role="tab" aria-controls="list-settings">{`<`} $1000</a>
                            </div>
                       </div>
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