import { Link } from "react-router-dom";
import Cart from "../Cart";
function CheckOut(){
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="d-grid gap-2 col-1 me-auto">
                    <Link to="/cart">
                        <button className="btn btn-secondary" type="button">Cancel</button>
                    </Link>
                </div>
                <div className="d-grid gap-2 col-5 mx-auto">
                    <h2>Complete your order</h2>
                </div>
            </div>
            <hr></hr>

            <div className="my-5 px-5">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Product name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>MacBook Pro</td>
                            <td>$1500</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td colspan="2">Total:</td>
                            <td>$3000</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="my-5 px-5">
                <div className="input-group w-75">
                    <span className="input-group-text">First and last name</span>
                    <input type="text" aria-label="First name" className="form-control"/>
                    <input type="text" aria-label="Last name" className="form-control"/>
                </div>
                <div className="input-group mb-3 w-75 my-4">
                    <span className="input-group-text" id="inputGroup-sizing-default">Phone</span>
                    <input type="text" className="form-control" aria-label="Sizing example input"/>
                </div>
                <div className="input-group ">
                    <span className="input-group-text">Address</span>
                    <select type="text" aria-label="First name" className="form-control">
                        <option value="3">Hồ Chí Minh</option>
                    </select>
                    <select type="text" aria-label="Last name" className="form-control">
                        <option value="3">Gò Vấp</option>
                    </select>
                    <select type="text" aria-label="Last name" className="form-control">
                        <option value="3">Phường 5</option>
                    </select>
                    <input type="text" aria-label="First name" className="form-control" placeholder="Street name and house number"/>
                </div>
            </div>

            <div class="d-grid gap-2 col-4 mx-auto">
                <button class="btn btn-primary" type="button">Finish</button>
            </div>
        </div>
    );
}

export default CheckOut;