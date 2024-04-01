import { useState, useEffect } from "react";
import Categories from "../../components/Categories";
import * as categoryService from "../../services/categoryService";
import CategoryModal from "./categoryModal";

const initCategory = {
    id: '',
    name: ""
}

function AdminCategory() {

    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState(initCategory);

    const getAllCategories = async () => {
        const { data } = await categoryService.getCategories();
        setCategories(data);

    };

    const onInputChange = (e) => {
        const name = e.target.value;
        setCategory(name);
    };
    const closeModalClick = () => {
        
        setCategory(initCategory);
    };


    useEffect(() => {
        getAllCategories();
    }, []);

    return (
        <div className="row align-items-center d-flex ">
            <div className=" r-0 ">
                <button type="button" className="btn btn-success btn-lg ms-auto r-0" data-bs-toggle="modal" data-bs-target="#categoryAddNewModal">Add New Category</button>
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
                        categories.map(category => (

                            <tr key={category.id}>

                                <td>{category.id}</td>
                                <td>{category.name}</td>
                                <td>
                                    <button className="btn btn-outline-secondary ms-auto" type="button" data-bs-toggle="modal" data-bs-target={`#categoryModal-${category.id}`} >---</button>

                                </td>
                            </tr>

                        ))
                    }

                </tbody>

            </table>

            <div className="modal-dialog modal-dialog-centered">
                    <div className="modal fade" id={`categoryAddNewModal`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="staticBackdropLabel">Add New Category</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModalClick}></button>
                                </div>
                                <div className="modal-body">
                                    <div className="input-group pe-2 mb-5">
                                        <span className="input-group-text" id="inputGroup-sizing-default">ID</span>
                                        <input type="text" className="form-control" aria-label="Sizing example input" value={category.id} readOnly disabled />
                                    </div>
                                    <div className="input-group pe-2 mb-5">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
                                        <input type="text" className="form-control" aria-label="Sizing example input" name='name' value={category.name} onChange={(e) =>{onInputChange(e)}}/>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModalClick}>Close</button>
                                    <button type="button" className="btn btn-primary">Understood</button>
                                </div>
                            </div>
                        </div>
                    </div>
                {
                    categories.map(category => (
                        <CategoryModal category = {category}/>
                    ))
                }

            </div>
        </div >
    );
}

export default AdminCategory;