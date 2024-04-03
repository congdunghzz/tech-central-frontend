import { useState } from "react";
import { Link } from "react-router-dom";
import AdminSideBar from "../../components/AdminSideBar";
import ProductList from "../../components/ProductList";
import ProductAdmin from "../ProductAdmin";
import AdminCategory from "../AdminCategory";
import AdminBrand from "../AdminBrand";


function Admin() {



    const [tab, setTab] = useState('Products');

    const handleTabClick = (tab) => {
        setTab(tab);
    }

    return (    
        <div className="container-fluid mt-5">
            <div className="row ">
                <div className="col-lg-2 mb-5">
                    <div className="  ps-4 list-group list-group-flush justify-content-center" role="tablist">
                        <a className="list-group-item list-group-item-action active" data-bs-toggle="list" role="tab" aria-controls="list-home" onClick={() => handleTabClick("Products")}>Products</a>
                        <a className="list-group-item list-group-item-action" data-bs-toggle="list" role="tab" aria-controls="list-profile" onClick={() => handleTabClick("Orders")}>Orders</a>
                        <a className="list-group-item list-group-item-action" data-bs-toggle="list" role="tab" aria-controls="list-messages" onClick={() => handleTabClick("Customer accounts")}>Customer accounts</a>
                        <a className="list-group-item list-group-item-action" data-bs-toggle="list" role="tab" aria-controls="list-settings" onClick={() => handleTabClick("Brand")}>Brand</a>
                        <a className="list-group-item list-group-item-action" data-bs-toggle="list" role="tab" aria-controls="list-settings" onClick={() => handleTabClick("Categories")}>Category</a>
                    </div>
                </div>
                <div className="col-lg-10 ps-4">
                    {tab == "Products" && <ProductAdmin />}
                    {tab == "Categories" && <AdminCategory />}
                    {tab == "Brand" && <AdminBrand />}
                </div>
            </div>
        </div>
    );
}

export default Admin;