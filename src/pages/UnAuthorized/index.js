import { Link } from "react-router-dom";
import "../Cart/Cart.css"
function UnAuthorized() {
    return (
        <>
            <div className="container mt-5">
                <Link to="/">
                    <button className="btn btn-secondary">Back to Home Page</button>
                </Link>

            </div>
            <hr />
            <div className="min-vh-75 d-flex justify-content-center align-items-center">
                <h1 className="text-danger text-center"> You Are Not Permitted To Access This Page </h1>
                <br />
            </div>
        </>
    )
}

export default UnAuthorized;