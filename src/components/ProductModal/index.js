import { useState, useRef } from "react";

import * as productService from "../../services/productService";

function ProductModal(data = {}) {

    data = data.data;

    const [formData, setFormData] = useState(data);
    const [showImageInput, setShowImageInput] = useState(false);

    const [images, setImages] = useState([]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        const [fieldName, subFieldName] = name.split('.');
        if (subFieldName) {
            setFormData(prevData => ({
                ...prevData,
                [fieldName]: {
                    ...prevData[fieldName],
                    [subFieldName]: value
                }
            }));
        } else {

            setFormData(prevData => ({
                ...prevData,
                [name]: value
            }));
        }
    };


    const handleSaveClick = async () => {
        if (JSON.stringify(data) != JSON.stringify(formData)) {

            if (window.confirm('Are you sure you want to save')) {

                const res = await productService.updateProduct(data.id, formData)
                
                if (res.code) {
                    alert(res.message);
                }else if (res.err) {
                    alert(res.err);
                } else {
                    setFormData(res.data);
                    alert('updated successfully');

                }
            }


        }
    };


    const handleDeleteProductBtn = async () => {

        if (window.confirm('Are you sure you want to save')) {

            const res = (await productService.deleteProduct(data.id)).data;

            console.log(res);
        }
    };

    const handleImportImagesBtn = async () => {
        console.log(images);
        let formData = new FormData();

        images.forEach(image => {
            formData.append('images', image);
        })

        if (window.confirm('Import images ??')) {

            const res = (await productService.importImages(data.id, formData)).data;
            console.log(res);
            setImages([])
        }
    }

    const onChangeImageInput = (e) => {
        const selectedImages = Array.from(e.target.files);
        setImages(selectedImages);

    }


    return (

        <div className="modal fade" id={`staticBackdrop-${data.id}`} data-bs-backdrop="static" tabIndex="-1" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">{data.name}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => { setFormData(data); setImages([]) }}></button>
                    </div>
                    <div className="modal-body container-fluid row">
                        <div className="col-6">
                            <div className="input-group pe-2 mb-5">
                                <span className="input-group-text" id="inputGroup-sizing-default">ID</span>
                                <input type="text" className="form-control" aria-label="Sizing example input" value={data.id} readOnly disabled/>
                            </div>
                            <div className="input-group pe-2 mb-5">
                                <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
                                <input type="text" className="form-control" aria-label="Sizing example input" name='name' value={formData.name} onChange={(e) => { handleChange(e) }} />
                            </div>
                            <div className="input-group pe-2 mb-5">
                                <span className="input-group-text" id="inputGroup-sizing-default">Price</span>
                                <input type="number" className="form-control" aria-label="Sizing example input" name="price" value={formData.price} onChange={(e) => { handleChange(e) }} />
                            </div>
                            <div className="input-group pe-2 mb-5">
                                <span className="input-group-text" id="inputGroup-sizing-default">Brand</span>
                                <input type="text" className="form-control" aria-label="Sizing example input" name="brand" value={formData.brand} onChange={(e) => { handleChange(e) }} />
                            </div>
                            <div className="input-group pe-2 mb-5">
                                <span className="input-group-text" id="inputGroup-sizing-default">Category</span>
                                <input type="text" className="form-control" aria-label="Sizing example input" name="category" value={formData.category} onChange={(e) => { handleChange(e) }} />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="input-group pe-2 mb-5">
                                <span className="input-group-text" id="inputGroup-sizing-default">CPU</span>
                                <input type="text" className="form-control" aria-label="Sizing example input" name="productDetail.cpu" value={formData.productDetail.cpu} onChange={(e) => { handleChange(e) }} />
                            </div>
                            <div className="input-group pe-2 mb-5">
                                <span className="input-group-text" id="inputGroup-sizing-default">RAM</span>
                                <input type="number" className="form-control" aria-label="Sizing example input" name="productDetail.ram" value={`${formData.productDetail.ram}`} onChange={(e) => { handleChange(e) }} />
                            </div>
                            <div className="input-group pe-2 mb-5">
                                <span className="input-group-text" id="inputGroup-sizing-default">ROM</span>
                                <input type="number" className="form-control" aria-label="Sizing example input" name="productDetail.rom" value={formData.productDetail.rom} onChange={(e) => { handleChange(e) }} />
                            </div>
                            <div className="input-group pe-2 mb-5">
                                <span className="input-group-text" id="inputGroup-sizing-default">Screen</span>
                                <input type="text" className="form-control" aria-label="Sizing example input" name="productDetail.screen" value={formData.productDetail.screen} onChange={(e) => { handleChange(e) }} />
                            </div>
                            <div className="input-group pe-2 mb-5">
                                <span className="input-group-text" id="inputGroup-sizing-default">resolution</span>
                                <input type="text" className="form-control" aria-label="Sizing example input" name="productDetail.resolution" value={formData.productDetail.resolution} onChange={(e) => { handleChange(e) }} />
                            </div>
                            <div className="input-group pe-2 mb-5">
                                <span className="input-group-text" id="inputGroup-sizing-default">material</span>
                                <input type="text" className="form-control" aria-label="Sizing example input" name="productDetail.material" value={formData.productDetail.material} onChange={(e) => { handleChange(e) }} />
                            </div>
                            <div className="input-group pe-2 mb-5">
                                <span className="input-group-text" id="inputGroup-sizing-default">Color</span>
                                <input type="text" className="form-control" aria-label="Sizing example input" name="productDetail.color" value={formData.productDetail.color} onChange={(e) => { handleChange(e) }} />
                            </div>

                        </div>
                    </div>
                    <div className="modal-footer">

                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close" onClick={() => { setFormData(data); setImages([]) }}>Close</button>

                        <button type="button"
                            className="btn btn-danger"
                            onClick={() => { handleDeleteProductBtn() }}
                        >
                            Delete product
                        </button>

                        <button type="button" className="btn btn-primary" onClick={() => { handleSaveClick() }}>Save changes</button>
                        <button type="button" className="btn btn-info" onClick={() => { setShowImageInput(!showImageInput) }}>Import images</button>
                    </div>

                    { showImageInput && (<div className="input-group mb-3">
                        <input type="file" className="form-control" id="inputGroupFile02" multiple name="images" onChange={(e) => {onChangeImageInput(e)}}/>
                        <button className="btn btn-outline-success" onClick={() => {handleImportImagesBtn()}}>Upload</button>
                    </div>)}
                </div>
            </div>

        </div>
    );
}

export default ProductModal;