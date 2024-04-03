import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductInfo from "../../components/ProductInfo";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductList from "../../components/ProductList";
import { getProductById, getProducts } from "../../services/productService";

const initProduct = {
    "name": "",
    "price": '',
    "productDetail": {
        "cpu": "",
        "ram": '',
        "rom": '',
        "screen": '',
        "resolution": "",
        "material": "",
        "color": ""
    },
    "category": "",
    "brand": "",
    "productImages": [
        {
            "id" : '',
            "url"   : '',
        }
    ]
}
function SingleProduct() {

    let { id } = useParams()
    const [similar, setSimilar] = useState([]);

    const [product, setProduct] = useState(initProduct);

    const getAllProducts = async ()=>{
        const {data} = await getProducts();
        setSimilar(data);
    }

    useEffect(() => {
        const getProduct = async () =>{
            const { data } = await getProductById(id);
            setProduct(data);   
        }

        getProduct();
            
    }, [id])

    useEffect(() =>{
        getAllProducts();
    }, []);

     
        return (
            <>
                <Header />
                <ProductInfo product={product}/>
                <ProductList title={"Similar Products"} showingType={'col-xxl-3  col-lg-4 col-md-6'} products={similar}></ProductList>
                <Footer />
            </>
        );
    
}

export default SingleProduct;