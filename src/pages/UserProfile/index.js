import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "../Profile";
import UserOrder from "../UserOrders";
import Header from "../../components/Header";

function UserProfile() {
    const [tab, setTab] = useState('Profile');
    const navigate = useNavigate();
    const handleTabClick = (tab) => {
        setTab(tab);
    }
    const logout = () =>{
        window.localStorage.removeItem('authToken');
        navigate('/');
    }

    return (    
        <div className="container-fluid mt-5">
            <Header/>
            <div className="row ">
                <div className="col-lg-2 mb-5">
                    <div className="  ps-4 list-group list-group-flush justify-content-center" role="tablist">
                        <a className="list-group-item list-group-item-action active" data-bs-toggle="list" role="tab" aria-controls="list-messages" onClick={() => handleTabClick("Profile")}>Profile</a>
                        <a className="list-group-item list-group-item-action" data-bs-toggle="list" role="tab" aria-controls="list-settings" onClick={() => handleTabClick("FavoriteProduct")}>Favorite Products</a>
                        <a className="list-group-item list-group-item-action" data-bs-toggle="list" role="tab" aria-controls="list-profile" onClick={() => handleTabClick("Orders")}>Orders</a>
                        <a className="list-group-item list-group-item-action" data-bs-toggle="list" role="tab" aria-controls="list-profile" onClick={() => logout()}>Logout</a>
                    </div>
                </div>
                <div className="col-lg-10 ps-4">
                    {tab == "Profile" && <Profile />}
                    {tab == "Orders" && <UserOrder />}
                    

                </div>
            </div>
        </div>
    );
}

export default UserProfile;