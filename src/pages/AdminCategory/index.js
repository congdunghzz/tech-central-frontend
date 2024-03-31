import { useState, useEffect } from "react";
import Categories from "../../components/Categories";
import * as categoryService from "../../services/categoryService";


const initCategory = {
    id: 0,
    name: ""
}

function AdminCategory (){

    const [categories, setCategories] = useState([]);

    const getAllCategories = async () => {
        const {data} = await categoryService.getCategories();
        setCategories(data);
        console.log(data);
    };


    useEffect(() =>{
        getAllCategories();
    }, []);

    return (
        <div className="row align-items-center d-flex ">
            <Categories categories={categories} />
        </div>
    );
}

export default AdminCategory;