import { Link, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { SearchContext } from "../../context/searchContext";
import "./header.css"

function Header() {
    const searchContext = useContext(SearchContext);
    const [searchInput, setSearchInput] = useState(searchContext.searchInput.trim());
    const isAuthenticated = window.localStorage.getItem("authToken");
    const navigate = useNavigate();

    const onInputEnter = (e) => {
        if (e.key === 'Enter') {
            searchContext.setSearchInput(searchInput.trim());
            navigate("/product");
        }
    }
    useEffect(() =>{
        setSearchInput(searchContext.searchInput.trim())
    }, [searchContext.searchInput]);

    return (
        <>
            <div className="d-flex container-fluid header-container border-bottom position-fixed bg-light shadow  mb-5 bg-white rounded px-5" >
                <div className="me-auto logo d-flex justify-content-center align-items-center">
                    <Link to={"/"} className="text-dark text-decoration-none">
                        <p className="font-weight-bold" style={{ fontWeight: "700", fontSize: "1.8rem" }}>Tech Central</p>
                    </Link>
                </div>
                <div className="w-50 align-items-center">
                    <div style={{ height: "60px", display: "flex", justifyContent: "center" }}>
                        <div className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search" style={{ width: "50%" }}>
                            <input type="search"
                                className="form-control form-control-dark "
                                placeholder="Search for product..." aria-label="Search"
                                value={searchInput}
                                onChange={(e) => {setSearchInput(e.target.value)}}
                                onKeyDown={onInputEnter} />
                        </div>
                    </div>

                </div>
                <div className="h-100 mb-auto ms-auto logo d-flex justify-content-center align-items-center">
                    <Link to="/cart">
                        <button type="button" className="btn btn-outline-danger me-2">
                            Cart
                        </button>
                    </Link>

                    {
                        isAuthenticated ?
                            (<Link to="/profile">
                                <button type="button" className="btn btn-outline-primary me-2">
                                    My Profile
                                </button>
                            </Link>)
                            :
                            (<Link to="/login">
                                <button type="button" className="btn btn-outline-primary me-2">
                                    Login
                                </button>
                            </Link>)
                    }

                </div>
            </div>
            <div className="placeholder"></div>
        </>
    )
}

export default Header;