import "./Banner.css";

function Banner (){
    return (
        <div className="container-fluid">
            <div className="banner">
                <div className="row">
                    <div className="col-lg-6">
                        <img className="w-100" src="https://static.vecteezy.com/system/resources/previews/002/478/302/non_2x/sale-electronics-banner-background-free-vector.jpg" alt="Banner">
                        </img>
                    </div>
                    <div className='col-lg-6 align-items-center d-flex justify-content-center'>
                            <div className='banner-content align-items-center w-75 text-center'>
                                <h2 className='mb-1 text-center font-weight-bold'>Don't miss the offers</h2>
                                <h3 className='mb-1 text-center font-weight-bold'>Grab it now</h3>
                                <button type="button " class="btn btn-outline-primary my-4   ">Shop now</button>
                            </div>
                        </div>
                </div>
            </div>

        </div>
    );
}

export default Banner;