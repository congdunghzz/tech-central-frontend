import { Link } from "react-router-dom";

function SingleProductAdmin(product) {
    return (
        <>
            <tr>
                <td>
                    <div className="basic-info">
                        <Link to="/product/productId/" className="text-decoration-none text-dark">
                            <img className="mh-100 " src="https://anphat.com.vn/media/lib/05-04-2023/mbpro.jpg"></img>
                        </Link>
                    </div>
                </td>
                <td>1</td>
                <td>MacBook</td>
                <td>$1500</td>
                <td>Apple</td>
                <td>Laptop</td>
                <button className="btn btn-secondary ms-auto" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Adjust</button>

            </tr>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Product Name</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body container-fluid row">
                            <div className="col-6">
                                <div className="input-group pe-2 mb-5">
                                    <span className="input-group-text" id="inputGroup-sizing-default">ID</span>
                                    <input type="text" className="form-control" aria-label="Sizing example input" value={123} readOnly />
                                </div>
                                <div className="input-group pe-2 mb-5">
                                    <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
                                    <input type="text" className="form-control" aria-label="Sizing example input" value={"MacBook Pro"} />
                                </div>
                                <div className="input-group pe-2 mb-5">
                                    <span className="input-group-text" id="inputGroup-sizing-default">Price</span>
                                    <input type="text" className="form-control" aria-label="Sizing example input" value={"$1500"} />
                                </div>
                                <div className="input-group pe-2 mb-5">
                                    <span className="input-group-text" id="inputGroup-sizing-default">Brand</span>
                                    <input type="text" className="form-control" aria-label="Sizing example input" value={"Apple"} />
                                </div>
                                <div className="input-group pe-2 mb-5">
                                    <span className="input-group-text" id="inputGroup-sizing-default">Category</span>
                                    <input type="text" className="form-control" aria-label="Sizing example input" value={"Laptop"} />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="input-group pe-2 mb-5">
                                    <span className="input-group-text" id="inputGroup-sizing-default">CPU</span>
                                    <input type="text" className="form-control" aria-label="Sizing example input" value={123} />
                                </div>
                                <div className="input-group pe-2 mb-5">
                                    <span className="input-group-text" id="inputGroup-sizing-default">RAM</span>
                                    <input type="text" className="form-control" aria-label="Sizing example input" value={"MacBook Pro"} />
                                </div>
                                <div className="input-group pe-2 mb-5">
                                    <span className="input-group-text" id="inputGroup-sizing-default">ROM</span>
                                    <input type="text" className="form-control" aria-label="Sizing example input" value={"$1500"} />
                                </div>
                                <div className="input-group pe-2 mb-5">
                                    <span className="input-group-text" id="inputGroup-sizing-default">Screen</span>
                                    <input type="text" className="form-control" aria-label="Sizing example input" value={"Apple"} />
                                </div>
                                <div className="input-group pe-2 mb-5">
                                    <span className="input-group-text" id="inputGroup-sizing-default">resolution</span>
                                    <input type="text" className="form-control" aria-label="Sizing example input" value={"Apple"} />
                                </div>
                                <div className="input-group pe-2 mb-5">
                                    <span className="input-group-text" id="inputGroup-sizing-default">material</span>
                                    <input type="text" className="form-control" aria-label="Sizing example input" value={"Apple"} />
                                </div>
                                <div className="input-group pe-2 mb-5">
                                    <span className="input-group-text" id="inputGroup-sizing-default">Color</span>
                                    <input type="text" className="form-control" aria-label="Sizing example input" value={"Apple"} />
                                </div>
                               
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input type="file" className="form-control" accept="image/png, image/jpeg" multiple/>
                        </div>
                        <div className="modal-footer">
                            {
                                product === undefined ?
                                (<button type="button" className="btn btn-danger">Delete product</button>) : (<></>)
                            }
                            <button type="button" className="btn btn-primary">{ product === undefined ? "Save changes" : "Add New"}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default SingleProductAdmin;