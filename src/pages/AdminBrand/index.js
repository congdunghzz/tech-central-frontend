import { useState, useEffect } from "react";

import * as brandService from "../../services/brandService"
import BrandModal from "./BrandModal";

const initBrand = {
    id: '',
    name: ""
}



function AdminBrand() {

    const [brands, setBrands] = useState([]);
    const [brand, setBrand] = useState(initBrand);
    const getAllBrand = async () => {
        const { data } = await brandService.getBrands();
        setBrands(data);

    };

    const onInputChange = (e) => {
        const name = e.target.value;
        setBrand(prevData => ({
            ...prevData,
            name: name
            }));
    };
    const closeModalClick = () => {
        
        setBrand(initBrand);
    };

    const reRenderUpdateBrand = (inputCategory) => {
        const newBrands = brands.map((item) => {
            
            if (item.id === inputCategory.id) {
                return { ...item, name: inputCategory.name }; 
            }
            return item; 
        });   
        setBrands(newBrands);

    };

    const reRenderDeleteBrand = (id) => {
        const newBrands = brands.filter(item => {
            return item.id !== id;
        })
        
        setBrands(newBrands);
    };

    useEffect(() => {
        getAllBrand();
    }, []);


    const addBrand = async () => {  
        if (JSON.stringify(brand) != JSON.stringify(initBrand)) {

            if (window.confirm('Are you sure you want to save')) {
                const res = await brandService.postBrand(brand);
                console.log(res);
                if (res.code) {
                    alert(res.message);
                } else {
                    setBrand(res.data);
                    alert('updated successfully');
                    setBrands([...brands, res.data]);
                }
            }
        }
    }

    return (
        <div className="row align-items-center d-flex ">
            <div className=" r-0 ">
                <button type="button" className="btn btn-success btn-lg ms-auto r-0" data-bs-toggle="modal" data-bs-target="#brandAddNewModal">Add New Brand</button>
            </div>
            <table className="table table-hover ms-3 mt-5">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        brands.map(brand => (

                            <tr key={brand.id}>

                                <td>{brand.id}</td>
                                <td>{brand.name}</td>
                                <td>
                                    <button className="btn btn-outline-secondary ms-auto" type="button" data-bs-toggle="modal" data-bs-target={`#brandModal-${brand.id}`} >---</button>

                                </td>
                            </tr>

                        ))
                    }

                </tbody>

            </table>

            <div className="modal-dialog modal-dialog-centered">
                    <div className="modal fade" id={`brandAddNewModal`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="staticBackdropLabel">Add New Brand</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModalClick}></button>
                                </div>
                                <div className="modal-body">
                                    <div className="input-group pe-2 mb-5">
                                        <span className="input-group-text" id="inputGroup-sizing-default">ID</span>
                                        <input type="text" className="form-control" aria-label="Sizing example input" value={''} readOnly disabled />
                                    </div>
                                    <div className="input-group pe-2 mb-5">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
                                        <input type="text" className="form-control" aria-label="Sizing example input" name='name' value={brand.name} onChange={(e) =>{onInputChange(e)}}/>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModalClick}>Close</button>
                                    <button type="button" className="btn btn-primary" onClick={addBrand}>Add New</button>
                                </div>
                            </div>
                        </div>
                    </div>
                {
                    brands.map(brand => (
                        <BrandModal data = {brand} reRenderDeleteBrand = {reRenderDeleteBrand} reRenderUpdateBrand={reRenderUpdateBrand}/>
                    ))
                }

            </div>
        </div >
    );
}

export default AdminBrand;