
import "./Cart.css"

function CartItem (){
    return (
        
            <div className="cart d-flex">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                        <td className="p-0"><div className="bg-primary">MacBook Pro</div></td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                   
                </tbody>
            </table>
            </div>
    );
}

export default CartItem;