import { useEffect, useState, useContext } from "react";
import ProductList from "../../components/ProductList";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getCategories } from "../../services/categoryService";
import { getBrands } from "../../services/brandService";
import { getProductsByCategoryAndBrand, searchForName } from "../../services/productService";
import { SearchContext } from "../../context/searchContext";

function Product() {

    const searchContext = useContext(SearchContext);

    const [productList, setProductList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState('');
    const [brands, setBrands] = useState([]);
    const [brand, setBrand] = useState('');

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const generatePageNumbers = () => {
        let pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
        return pages;
    }

    const getAllCategories = async () => {
        const { data } = await getCategories();
        setCategories(data);
        setTotalPages(data.totalPages);
    };
    const getAllBrand = async () => {
        const { data } = await getBrands();
        setBrands(data);
    }

  

    const getAllProductsByCategoryAndBrand = async () => {
        const { data } = await getProductsByCategoryAndBrand(category, brand, currentPage, 9);
        setProductList(data.content);
        setTotalPages(data.totalPages);
    }

    const getProductByKeySearch = async (keySearch) => {
        const { data } = await searchForName(keySearch ,currentPage, 9);
        setProductList(data.content);
        setTotalPages(data.totalPages);
    }

    const labelCategoryClick = (categoryName) => {
        setCategory(categoryName);
        setCurrentPage(1);
        searchContext.setSearchInput('');
    }

    const handleBrandClick = (brandName) => {
        setBrand(brandName);
        setCurrentPage(1);
        searchContext.setSearchInput('');
    }

    const changePageClick = (page) => {
        if (page > totalPages || page < 1) {
            return;
        }
        setCurrentPage(page);
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
        console.log("second render");
        
        if (searchContext.searchInput.length > 2){
            getProductByKeySearch(searchContext.searchInput);
        }else{
            getAllProductsByCategoryAndBrand();
        }
    }, [searchContext.searchInput, category, brand, currentPage]);


    return (
        <>
            <Header />
            <div className="mh-75 product-page, container-fluid min-vh-75">
                <div className="row">
                    <div className=" col-md-2 col-sm-12">
                        <div className="mt-4">
                            <h4>Category</h4>

                            <div className="  ps-4 list-group list-group-flush justify-content-center" role="tablist">
                                <a className="list-group-item list-group-item-action active" data-bs-toggle="list" role="tab" aria-controls="list-home" onClick={() => { labelCategoryClick('') }}>All</a>
                                {
                                    categories.map((item) => (
                                        <a className="list-group-item list-group-item-action" data-bs-toggle="list" role="tab" aria-controls="list-profile" onClick={() => { labelCategoryClick(item.name) }}>{item.name}</a>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="mt-4">
                            <h4>Brand</h4>

                            <div className="  ps-4 list-group list-group-flush justify-content-center" role="tablist">
                                <a className="list-group-item list-group-item-action active" data-bs-toggle="list" role="tab" aria-controls="list-home" onClick={() => { handleBrandClick('') }}>All</a>
                                {
                                    brands.map((item) => (
                                        <a className="list-group-item list-group-item-action" data-bs-toggle="list" role="tab" aria-controls="list-profile" onClick={() => { handleBrandClick(item.name) }}>{item.name}</a>
                                    ))
                                }
                            </div>
                        </div>

                    </div>
                    <div className=" col-md-10 col-sm-12  container-fluid ">
                        <ProductList showingType={'col-xxl-4 col-xl-4 col-lg-6 col-md-6'} products={productList} />
                        <nav aria-label="Page navigation example text-center">
                            <div className="d-flex justify-content-center w-100 my-4">

                                <ul className="pagination">
                                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                        <a className="page-link" href="#"
                                            onClick={() => { changePageClick(currentPage - 1) }}>Previous</a>
                                    </li>
                                    {
                                        generatePageNumbers().map(i => (
                                            <li key={i}
                                                className={`page-item ${currentPage === i ? 'active' : ''}`}>
                                                <a className="page-link" href="#"
                                                    onClick={() => { changePageClick(i) }}>{i}</a>
                                            </li>
                                        ))
                                    }

                                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}
                                    >
                                        <a className="page-link" href="#"
                                            onClick={() => { changePageClick(currentPage + 1) }}>Next</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
}

export default Product;