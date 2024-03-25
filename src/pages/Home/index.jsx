import { useEffect } from "react";
import Header from "../../components/Header";
import PriceSection from "../../components/PriceSection";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import ProductList from "../../components/ProductList";
import Banner from "../../components/Banner";
import Categories from "../../components/Categories";

function Home () {

    // home page == col-xxl-3  col-lg-4 col-md-6
    // product page == col-xxl-4 col-xl-4 col-lg-6 col-md-6

    return (
        <>
            <Header/>
            <PriceSection/>
            <Categories/>
            <Features/>
            <ProductList title="Trending Products" showingType={'col-xxl-3  col-lg-4 col-md-6'}/>
            <Banner/>
            <ProductList title = "New Arrivals" showingType={'col-xxl-3  col-lg-4 col-md-6'}/>
            <Footer/>
        </>
        
    )

}
export default Home
