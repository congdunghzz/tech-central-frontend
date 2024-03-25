import { Link } from "react-router-dom";
import "./Categories.css"

function Categories (){
    return (
        <div className="categories">

            <div className=" d-flex flex-wrap align-items-center justify-content-center  py-3 my-5 ">   
                        <ul className=" nav  mb-2 justify-content-center mb-md-0">
                            <li className="mx-3 fw-bold" onClick={() =>{window.scrollTo({ top: 0, behavior: 'smooth' })}}>
                                <Link to="/product" className="nav-link px-2 text-secondary">All Products</Link>
                            </li>
                            <li className="mx-3 fw-bold" onClick={() =>{window.scrollTo({ top: 0, behavior: 'smooth' })}}>
                                <Link to="/product" className="nav-link px-2 text-secondary">Smart Phone</Link>
                            </li>
                            <li className="mx-3 fw-bold" onClick={() =>{window.scrollTo({ top: 0, behavior: 'smooth' })}}>
                                <Link to="/product" className="nav-link px-2 text-secondary">Lap Top</Link>
                            </li>
                            <li className="mx-3 fw-bold" onClick={() =>{window.scrollTo({ top: 0, behavior: 'smooth' })}}>
                                <Link to="/product" className="nav-link px-2 text-secondary">Tablet</Link>
                            </li>
                            <li className="mx-3 fw-bold" onClick={() =>{window.scrollTo({ top: 0, behavior: 'smooth' })}}>
                                <Link to="/product" className="nav-link px-2 text-secondary">Smart Watch</Link>
                            </li>
                            <li className="mx-3 fw-bold" onClick={() =>{window.scrollTo({ top: 0, behavior: 'smooth' })}}>
                                <Link to="/product" className="nav-link px-2 text-secondary">Smart Watch</Link>
                            </li>
                            <li className="mx-3 fw-bold" onClick={() =>{window.scrollTo({ top: 0, behavior: 'smooth' })}}>
                                <Link to="/product" className="nav-link px-2 text-secondary">Smart Watch</Link>
                            </li>
                            <li className="mx-3 fw-bold" onClick={() =>{window.scrollTo({ top: 0, behavior: 'smooth' })}}>
                                <Link to="/product" className="nav-link px-2 text-secondary">Smart Watch</Link>
                            </li>
                        </ul>    
            </div>
        </div>
    );
}

export default Categories;