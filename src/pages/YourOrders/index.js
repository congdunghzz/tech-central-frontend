import { Link } from "react-router-dom";



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
            <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Total Cost</th>
                    <th scope="col">Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Mr.Loiper</td>
                    <td>3691616743</td>
                    <td>$2800</td>
                    <td>2022-07-01</td>
                </tr>
                <tr>
                    <td>Jacob</td>
                    <td>3691616743</td>
                    <td>$1200</td>
                    <td >2024-04-01</td>
                </tr>
                
            </tbody>
            </table>
        </div>
    );

}

export default YourOrders;