

function AdminSideBar (){
    return (
        <div className="col-lg-2">
            <div className="  ps-4 list-group list-group-flush justify-content-center" role="tablist">
                                <a className="list-group-item list-group-item-action active"  data-bs-toggle="list" role="tab" aria-controls="list-home">Products</a>
                                <a className="list-group-item list-group-item-action"  data-bs-toggle="list" role="tab" aria-controls="list-profile">Orders</a>
                                <a className="list-group-item list-group-item-action"  data-bs-toggle="list" role="tab" aria-controls="list-messages">Customer accounts</a>
                                <a className="list-group-item list-group-item-action"  data-bs-toggle="list" role="tab" aria-controls="list-settings">Lenovo</a>
            </div>
        </div>
    );
}

export default AdminSideBar;