import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import PriceSection from "../../components/PriceSection";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import ProductList from "../../components/ProductList";
import Banner from "../../components/Banner";
import Categories from "../../components/Categories";
import { getCategories } from "../../services/categoryService";
import {getNewProduct } from "../../services/productService";

function Home() {
    const [categories, setCategories] = useState([]);
    const [productList, setProductList] = useState([]);
    const navigate = useNavigate();
    const getAllCategories = async () => {
        const { data } = await getCategories();
        setCategories(data);
    };

    const handleSeeMoreClick = () => {
        navigate("/product");
    };
    
    const getNew = async () => {
        const { data } = await getNewProduct(8);
        setProductList(data);
    }
    useEffect(() => {
        getAllCategories();
    }, []);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, []);

    useEffect(() => {
        getNew();
    }, []);

    // home page == col-xxl-3  col-lg-4 col-md-6
    // product page == col-xxl-4 col-xl-4 col-lg-6 col-md-6

    return (
        <>
            <Header />
            <PriceSection />
            <Categories categories={categories} />
            <Features />
            {/* <ProductList title="Trending Products" showingType={'col-xxl-3  col-lg-4 col-md-6'} products={productList}/> */}
            <ProductList title="New Arrivals" showingType={'col-xxl-3  col-lg-4 col-md-6'} products={productList} />
            <div class="d-grid gap-2 col-2 mx-auto mb-5">
                <button type="button" class="btn btn-outline-primary p-2" onClick={handleSeeMoreClick}>See more</button>
            </div>

            <Banner />
            <Footer />
        </>

    )

}
export default Home
