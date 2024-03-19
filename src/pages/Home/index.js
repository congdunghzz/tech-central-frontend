import Header from "../../components/Header";
import PriceSection from "../../components/PriceSection";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import ProductList from "../../components/ProductList";
import Banner from "../../components/Banner";
import Categories from "../../components/Categories";
function Home () {
    return (
        <>
            <Header/>
            <PriceSection/>
            <Categories/>
            <Features/>

            <ProductList title = "Trending Products"/>
            <Banner/>
            <ProductList title = "New Arrivals"/>
            <Footer/>
        </>
        
    )

}
export default Home
