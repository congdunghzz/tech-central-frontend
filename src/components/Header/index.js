import "./header.css"

function Header () {

    return (
        <div className="d-flex container-fluid header-container border-bottom position-fixed bg-light shadow  mb-5 bg-white rounded" >
            <div className="me-auto logo d-flex justify-content-center align-items-center">
                <p className="font-weight-bold" style={{fontWeight:"700", fontSize:"1.8rem"}}>Tech Central</p>
            </div>
            <div className="w-50 align-items-center">
                <div style={{height :"60px", display:"flex", justifyContent:"center"}}>
                    <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search" style={{ width:"50%"}}>
                        <input type="search" class="form-control form-control-dark " placeholder="Search..." aria-label="Search"/>
                    </form>
                </div>
                
            </div>
            <div className="h-100 mb-auto ms-auto logo d-flex justify-content-center align-items-center">
                <button type="button" className="btn btn-outline-danger me-2">Cart</button>
            </div>
        </div>
    )
}

export default Header;