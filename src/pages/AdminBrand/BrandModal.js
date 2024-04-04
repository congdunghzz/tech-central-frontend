import { useState } from "react";

import * as brandService from "../../services/brandService";

function BrandModal({data, reRenderUpdateBrand, reRenderDeleteBrand}) {
    console.log(data);
    const [brand, setBrand] = useState(data);
    const onInputChange = (e) => {
        const name = e.target.value;
        setBrand(prevData => ({
            ...prevData,
            name: name
            }))
    };

    const closeModalClick = () => {
        setBrand(data);
    };

    const saveBrand = async () => {  
        if (JSON.stringify(data) != JSON.stringify(brand)) {

            if (window.confirm('Are you sure you want to save')) {
                const res = await brandService.updateBrand(data.id, brand)
                console.log(res);
                if (res.code) {
                    alert(res.message);
                } else {
                    setBrand(res.data);
                    alert('updated successfully');
                    reRenderUpdateBrand(res.data);
                }
            }
        }
    }

    const deleteBrand = async () => {
        if (window.confirm('Are you sure you want to save')) {

            const res = await brandService.deleteBrand(data.id);

            if (res.code) {
                alert(res.message);
            } else {
                setBrand(res.data);
                alert('delete successfully');
                reRenderDeleteBrand(brand.id);
            }
        }
    }


    return (
        <div key={data.id} className="modal fade" id={`brandModal-${brand.id}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">{data.name}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModalClick}></button>
                    </div>
                    <div className="modal-body">
                        <div className="input-group pe-2 mb-5">
                            <span className="input-group-text" id="inputGroup-sizing-default">ID</span>
                            <input type="text" className="form-control" aria-label="Sizing example input" value={brand.id} readOnly disabled />
                        </div>
                        <div className="input-group pe-2 mb-5">
                            <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
                            <input type="text" className="form-control" aria-label="Sizing example input" name='name' value={brand.name} onChange={(e) => { onInputChange(e) }} />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModalClick}>Close</button>
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={deleteBrand}>Delete</button>
                        <button type="button" className="btn btn-primary" onClick={saveBrand}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrandModal;