import './PriceSection.css'
import { Link } from 'react-router-dom'

function PriceSection () {
    return (
        <div className="price-section" >
            <div className="container px-3 py-4 mx-auto h-100">

                <div className='row h-100'>
                    <div className='col-lg-6 h-100 align-items-center d-flex bg-image'>
                        <img 
                            src='hero.png' className=' h-100 p-0 mw-100' style={{backgroundImage: "#fff"}}></img>
                    </div>

                    <div className='col-lg-6 align-items-center d-flex justify-content-center'>
                        <div className='banner-content align-items-center w-75'>
                            <h2 className='mb-4'>Latest product line of Apple 2024</h2>
                            <h4 className='mb-4'>Exclusive offer <spam className = "text-danger">-10%</spam> off this week</h4>
                            <Link to = "/product">
                                <button type="button" className="btn btn-outline-primary mb-4 ">Shop now</button>
                            </Link>
                        </div>
                    </div>
                    

                </div>
                
            </div>
        </div>
    )
}

export default PriceSection