import { Link } from "react-router-dom";
import Cart from "../Cart";
function CheckOut(){
    return (
        <div className="container mt-5">
            <div className="row">
                <div class="d-grid gap-2 col-1 me-auto">
                    <Link to="/cart">
                        <button class="btn btn-secondary" type="button">Cancel</button>
                    </Link>
                </div>
                <div class="d-grid gap-2 col-5 mx-auto">
                    <h2>Finish your order</h2>
                </div>
            </div>
            <hr></hr>
        </div>
    );
}

export default CheckOut;