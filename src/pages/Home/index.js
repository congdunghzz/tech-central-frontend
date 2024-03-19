import Header from "../../components/Header";
import PriceSection from "../../components/PriceSection";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import ProductList from "../../components/ProductList";
import Banner from "../../components/Banner";
function Home () {
    return (
        <>
            <Header/>
            <PriceSection/>
            <ProductList title = "Trending Products"/>
            <Banner/>
            <Features/>
            <ProductList title = "New Arrivals"/>
            <Footer/>
        </>
        
    )

}
export default Home
