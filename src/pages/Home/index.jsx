import { useEffect, useState } from "react";
import Header from "../../components/Header";
import PriceSection from "../../components/PriceSection";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import ProductList from "../../components/ProductList";
import Banner from "../../components/Banner";
import Categories from "../../components/Categories";
import { getCategories } from "../../services/categoryService";
import { getProducts, getNewProduct } from "../../services/productService";

function Home () {
    const [ categories, setCategories] = useState([]);
    const [productList, setProductList] = useState([]);

    const getAllCategories = async () => {
        const {data} = await getCategories();
        setCategories(data);
    };

    const getProductList = async () => {
        const { data } = await getProducts();
        console.log(data);
        setProductList(data.content);
    }
    const getNew = async () => {
        const { data } = await getNewProduct(8);
        console.log(data);
        setProductList(data);
    }
    useEffect( () => {
        getAllCategories();
    }, []);

    useEffect( () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, []);

    useEffect( () => {
        getNew();
    }, []);

    // home page == col-xxl-3  col-lg-4 col-md-6
    // product page == col-xxl-4 col-xl-4 col-lg-6 col-md-6

    return (
        <>
            <Header/>
            <PriceSection/>
            <Categories categories={categories}/>
            <Features/>
            <ProductList title="Trending Products" showingType={'col-xxl-3  col-lg-4 col-md-6'} products={productList}/>
            <Banner/>
            <ProductList title = "New Arrivals" showingType={'col-xxl-3  col-lg-4 col-md-6'} products={productList}/>
            <Footer/>
        </>
        
    )

}
export default Home
