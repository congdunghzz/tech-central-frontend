import { Link } from "react-router-dom";
import UserOrder from "../UserOrders";


function YourOrders () {
    return (
        
        <div className="container mt-5">
            <div className="row">
                <div className="d-grid gap-2 col-1 me-auto">
                    <Link to="/product">
                        <button className="btn btn-secondary" type="button">Back</button>
                    </Link>
                </div>
                <div className="d-grid gap-2 col-5 mx-auto">
                    <h2>Your Orders</h2>
                </div>
            </div>
            <hr/>
            <UserOrder></UserOrder>
        </div>
    );

}

export default YourOrders;