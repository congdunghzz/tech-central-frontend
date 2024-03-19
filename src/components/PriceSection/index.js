import './PriceSection.css'

function PriceSection () {
    return (
        <div className="price-section" >
            <div className="container px-3 py-4 mx-auto h-100">

                <div className='row h-100'>
                    <div className='col-lg-6 h-100 align-items-center d-flex bg-image'>
                        <img 
                            src='https://shopify-xrh7.onrender.com/hero.png' className=' h-100 p-0' style={{backgroundImage: "#fff"}}></img>
                    </div>

                    <div className='col-lg-6 align-items-center d-flex justify-content-center'>
                        <div className='banner-content align-items-center w-75'>
                            <h2 className='mb-4'>Latest product line of Apple 2024</h2>
                            <h4 className='mb-4'>Exclusive offer <spam className = "text-danger">-10%</spam> off this week</h4>
                            <button type="button" class="btn btn-outline-primary mb-4   ">Shop now</button>
                        </div>
                    </div>
                    

                </div>
                
            </div>
        </div>
    )
}

export default PriceSection