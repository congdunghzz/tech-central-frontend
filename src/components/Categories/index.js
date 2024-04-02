import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./Categories.css"

function Categories(props) {

    const categories = props.categories;

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, []);
    return (
        <div className="categories">

            <div className=" d-flex flex-wrap align-items-center justify-content-center  py-3 my-5 ">
                <ul className=" nav  mb-2 justify-content-center mb-md-0">
                    <li className="mx-3 fw-bold" >
                        <Link to="/product" className="nav-link px-2 text-secondary">All Products</Link>
                    </li>
                    {
                        categories.map((category) => 
                            (<li className="mx-3 fw-bold" >
                                <Link to="/product" className="nav-link px-2 text-secondary">{category.name}</Link>
                            </li>)
                        )
                    }

                    
                </ul>
            </div>
        </div>
    );
}

export default Categories;