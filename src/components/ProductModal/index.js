import { useState } from "react";

function ProductModal(data ={}) {

     data = data.data;

     const [formData, setFormData] = useState(data);

     const handleChange = (e) => {
         const { name, value } = e.target;
         setFormData(prevData => ({
             ...prevData,
             [name]: value
         }));
         console.log(formData);
     };
 
    return (
        <div class="modal fade" id=  {`staticBackdrop-${data.id}`} data-bs-backdrop="static" tabindex="-1" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">{data.name}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body container-fluid row">
                        <div className="col-6">
                            <div className="input-group pe-2 mb-5">
                                <span className="input-group-text" id="inputGroup-sizing-default">ID</span>
                                <input type="text" className="form-control" aria-label="Sizing example input" value={data.id} readOnly />
                            </div>
                            <div className="input-group pe-2 mb-5">
                                <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
                                <input type="text" className="form-control" aria-label="Sizing example input" name='name' value={formData.name} onChange={(e) =>{handleChange(e)}}/>
                            </div>
                            <div className="input-group pe-2 mb-5">
                                <span className="input-group-text" id="inputGroup-sizing-default">Price</span>
                                <input type="text" className="form-control" aria-label="Sizing example input" value={formData.price} onChange={(e) =>{handleChange(e)}}/>
                            </div>
                            <div className="input-group pe-2 mb-5">
                                <span className="input-group-text" id="inputGroup-sizing-default">Brand</span>
                                <input type="text" className="form-control" aria-label="Sizing example input" value={formData.brand} onChange={(e) =>{handleChange(e)}}/>
                            </div>
                            <div className="input-group pe-2 mb-5">
                                <span className="input-group-text" id="inputGroup-sizing-default">Category</span>
                                <input type="text" className="form-control" aria-label="Sizing example input" value={formData.category} onChange={(e) =>{handleChange(e)}}/>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="input-group pe-2 mb-5">
                                <span className="input-group-text" id="inputGroup-sizing-default">CPU</span>
                                <input type="text" className="form-control" aria-label="Sizing example input" value={formData.productDetail.cpu} onChange={(e) =>{handleChange(e)}}/>
                            </div>
                            <div className="input-group pe-2 mb-5">
                                <span className="input-group-text" id="inputGroup-sizing-default">RAM</span>
                                <input type="text" className="form-control" aria-label="Sizing example input" value={`${formData.productDetail.ram}`} onChange={(e) =>{handleChange(e)}}/>
                            </div>
                            <div className="input-group pe-2 mb-5">
                                <span className="input-group-text" id="inputGroup-sizing-default">ROM</span>
                                <input type="text" className="form-control" aria-label="Sizing example input" value={formData.productDetail.rom} onChange={(e) =>{handleChange(e)}}/>
                            </div>
                            <div className="input-group pe-2 mb-5">
                                <span className="input-group-text" id="inputGroup-sizing-default">Screen</span>
                                <input type="text" className="form-control" aria-label="Sizing example input" value={formData.productDetail.screen} onChange={(e) =>{handleChange(e)}}/>
                            </div>
                            <div className="input-group pe-2 mb-5">
                                <span className="input-group-text" id="inputGroup-sizing-default">resolution</span>
                                <input type="text" className="form-control" aria-label="Sizing example input" value={formData.productDetail.resolution} onChange={(e) =>{handleChange(e)}}/>
                            </div>
                            <div className="input-group pe-2 mb-5">
                                <span className="input-group-text" id="inputGroup-sizing-default">material</span>
                                <input type="text" className="form-control" aria-label="Sizing example input" value={formData.productDetail.material} onChange={(e) =>{handleChange(e)}}/>
                            </div>
                            <div className="input-group pe-2 mb-5">
                                <span className="input-group-text" id="inputGroup-sizing-default">Color</span>
                                <input type="text" className="form-control" aria-label="Sizing example input" value={formData.productDetail.color} onChange={(e) =>{handleChange(e)}}/>
                            </div>

                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <input type="file" className="form-control" accept="image/png, image/jpeg" multiple />
                    </div>
                    <div className="modal-footer">
                        {
                            data ?
                                (<button type="button" className="btn btn-danger">Delete product</button>) : (<></>)
                        }
                        <button type="button" className="btn btn-primary">{data ? "Save changes" : "Add New"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductModal;