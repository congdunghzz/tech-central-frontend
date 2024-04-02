import { useEffect, useState } from "react";
import ProductList from "../../components/ProductList";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Categories from "../../components/Categories";
import { getCategories } from "../../services/categoryService";
import { getBrands } from "../../services/brandService";
import { getProducts, getProductsByCategoryAndBrand } from "../../services/productService";

function Product() {

    const [productList, setProductList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState('');
    const [brands, setBrands] = useState([]);
    const [brand, setBrand] = useState('');


    const getAllCategories = async () => {
        const { data } = await getCategories();
        setCategories(data);
        console.log(data);
    };
    const getAllBrand = async () => {
        const { data } = await getBrands();
        setBrands(data);
    }

    const getProductList = async () => {
        const { data } = await getProducts();
        setProductList(data);
    }

    const getAllProductsByCategoryAndBrand = async () => {
        const { data } = await getProductsByCategoryAndBrand(category, brand);
        setProductList(data);
    }

    const labelCategoryClick = (categoryName) => {
        setCategory(categoryName);
    }

    const handleBrandClick = (brandName) => {
        setBrand(brandName);
    }

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, []);

    useEffect(() => {
        getAllCategories();
    }, []);
    useEffect(() => {
        getAllBrand();
    }, []);

    useEffect(() => {
        getProductList();
    }, []);


    useEffect(() => {
        getAllProductsByCategoryAndBrand();

    }, [category, brand]);



    return (
        <>
            <Header />
            <div className="mh-75 product-page, container-fluid">
                <Categories categories={categories} />
                <div className="row">
                    <div className=" col-md-2 col-sm-12">
                        <div className="mt-4">
                            <h4>Brand</h4>

                            <div className="  ps-4 list-group list-group-flush justify-content-center" role="tablist">
                                <a className="list-group-item list-group-item-action active" data-bs-toggle="list" role="tab" aria-controls="list-home" onClick={() => {handleBrandClick('')}}>All</a>
                                {
                                    brands.map((item) => (
                                        <a className="list-group-item list-group-item-action" data-bs-toggle="list" role="tab" aria-controls="list-profile" onClick={() => {handleBrandClick(item.name)}}>{item.name}</a>
                                    ))
                                }
                            </div>
                        </div>
                        
                    </div>
                    <div className=" col-md-10 col-sm-12  container-fluid">
                        <ProductList showingType={'col-xxl-4 col-xl-4 col-lg-6 col-md-6'} products={productList} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Product;