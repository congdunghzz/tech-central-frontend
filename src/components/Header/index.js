function Header () {

    return (
        <div className="container header border-bottom" style={{display: "flex"}}>
            <div className="col-1 logo d-flex justify-content-center align-items-center">
                <p className="font-weight-bold" style={{fontWeight:"700", fontSize:"1.8rem"}}>Tech Central</p>
            </div>
            <div className="col-9">
                <div style={{height :"60px", display:"flex", justifyContent:"center"}}>
                    <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search" style={{paddingTop :"24px", width:"50%"}}>
                        <input type="search" class="form-control form-control-dark " placeholder="Search..." aria-label="Search"/>
                    </form>
                </div>
                <header className="d-flex flex-wrap align-items-center justify-content-center  py-3 mb-4 ">
                    

                    <ul className="nav  mb-2 justify-content-center mb-md-0">
                        <li className="mx-3"><a href="#" className="nav-link px-2 link-secondary">Home</a></li>
                        <li className="mx-3"><a href="#" className="nav-link px-2">Smart Phone</a></li>
                        <li className="mx-3"><a href="#" className="nav-link px-2">Lap Top</a></li>
                        <li className="mx-3"><a href="#" className="nav-link px-2">Tablet</a></li>
                        <li className="mx-3"><a href="#" className="nav-link px-2">Smart Watch</a></li>
                    </ul>

                    
                </header>
            </div>
            <div className="col-1 logo d-flex justify-content-center align-items-center">
                <button type="button" className="btn btn-outline-primary me-2">Cart</button>
            </div>
        </div>
    )
}

export default Header;