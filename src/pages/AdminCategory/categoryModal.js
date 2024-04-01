import { useState } from "react";

import * as categoryService from "../../services/categoryService";

function CategoryModal(props) {

    const data = props.category;
    const [category, setCategory] = useState(data);

    const onInputChange = (e) => {
        const name = e.target.value;
        setCategory(prevData => ({
            ...prevData,
            name: name
            }))
    };

    const closeModalClick = () => {
        setCategory(data);
    };

    const saveCategory = async () => {  
        if (JSON.stringify(data) != JSON.stringify(category)) {

            if (window.confirm('Are you sure you want to save')) {
                const res = await categoryService.updateCategory(data.id, category)
                console.log(res);
                if (res.code) {
                    alert(res.message);
                } else {
                    setCategory(res.data);
                    alert('updated successfully');
                }
            }
        }
    }

    const deleteCategory = async () => {
        if (window.confirm('Are you sure you want to save')) {

            const res = await categoryService.deleteCategory(data.id);

            console.log(res);
        }
    }


    return (
        <div key={data.id} className="modal fade" id={`categoryModal-${category.id}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">{data.name}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModalClick}></button>
                    </div>
                    <div className="modal-body">
                        <div className="input-group pe-2 mb-5">
                            <span className="input-group-text" id="inputGroup-sizing-default">ID</span>
                            <input type="text" className="form-control" aria-label="Sizing example input" value={category.id} readOnly disabled />
                        </div>
                        <div className="input-group pe-2 mb-5">
                            <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
                            <input type="text" className="form-control" aria-label="Sizing example input" name='name' value={category.name} onChange={(e) => { onInputChange(e) }} />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModalClick}>Close</button>
                        <button type="button" className="btn btn-danger" onClick={deleteCategory}>Delete</button>
                        <button type="button" className="btn btn-primary" onClick={saveCategory}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryModal;