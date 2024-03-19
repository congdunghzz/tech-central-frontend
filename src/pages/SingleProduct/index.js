import ProductInfo from "../../components/ProductInfo";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductList from "../../components/ProductList";

function SingleProduct(){
    return (
        <>
            <Header/>
            <ProductInfo/>
            <ProductList title={"Similar Products"}></ProductList>
            <Footer/>
        </>
    );
}

export default SingleProduct;