import { useState, useEffect } from "react";
import SingleProductAdmin from "../../components/SingleProductAdmin";
import * as productService from "../../services/productService";
import * as categoryService from "../../services/categoryService";
import * as brandService from "../../services/brandService";


export const initProduct = {
    "name": "",
    "price": '',
    "productDetail": {
        "cpu": "",
        "ram": '',
        "rom": '',
        "screen": '',
        "resolution": "",
        "material": "",
        "color": ""
    },
    "category": "",
    "brand": "",
    "images": []
}
function ProductAdmin() {

    const [productList, setProductList] = useState([]);
    const [images, setImages] = useState([]);
    const [formData, setFormData] = useState(initProduct);

    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState('');

    const [brands, setBrands] = useState([]);
    const [brand, setBrand] = useState('');

    const getProductList = async () => {
        const { data } = await productService.getProducts();
        setProductList(data);
    }



    const getAllCategories = async () => {
        const { data } = await categoryService.getCategories();
        setCategories(data);
    }

    const getAllBrand = async () => {
        const { data } = await brandService.getBrands();
        setBrands(data);
    }

    const getProductsByCategoryAndBrand = async () => {
        const { data } = await productService.getProductsByCategoryAndBrand(category, brand);
        setProductList(data);
    }

    // save product
    const saveProduct = async () => {

        const data = new FormData();
        data.append('name', formData.name);
        data.append('price', formData.price);
        data.append('category', formData.category);
        data.append('brand', formData.brand);

        Object.keys(formData.productDetail).forEach(key => {
            data.append(`productDetail.${key}`, formData.productDetail[key]);
        });



        images.forEach(((img) => {
            data.append(`images`, img);
        }))

        const res = await productService.postNewProduct(data);

        if (res.code) {
            alert(res.message);
        } else if (res.err) {
            alert(res.err);
        } else {
            alert('updated successfully');

        }

    }




    const handleImageChange = (event) => {
        const selectedImages = Array.from(event.target.files);
        setImages(selectedImages);
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        const [fieldName, subFieldName] = name.split('.');
        if (subFieldName) {
            setFormData(prevData => ({
                ...prevData,
                [fieldName]: {
                    ...prevData[fieldName], // Giữ nguyên các giá trị của object con
                    [subFieldName]: value // Cập nhật giá trị của trường con
                }
            }));
        } else {
            // Nếu không có trường con, ta cập nhật trực tiếp vào trường chính
            setFormData(prevData => ({
                ...prevData,
                [name]: value
            }));
        }
    };

    const handleSaveClick = () => {
        if (window.confirm('Save Product')) {

            saveProduct();
        }

    }

    const labelCategoryClick = (categoryName) => {
        setCategory(categoryName);
    }

    const handleBrandClick = (brandName) => {
        setBrand(brandName);
    }

    useEffect(() => {
        getAllCategories();
    }, [])

    useEffect(() => {
        getAllBrand();
    }, [])

    useEffect(() => {
        getProductList();
    }, []);


    useEffect(() => {
        getProductsByCategoryAndBrand();

    }, [category, brand]);

    return (

        <div className="row align-items-center d-flex ">

            <div className="btn-group mb-5" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check" id="all" name="btnradio" autoComplete="off" checked={category === ''} />
                <label className="btn btn-outline-primary" for="all" onClick={() => { labelCategoryClick('') }}>All</label>
                {categories.map(c =>
                    <>
                        <input type="radio" className="btn-check" id={`${c.name}`} name="btnradio"
                            autoComplete="off" value={`${c.name}`}
                            checked={category === c.name} />
                        <label className="btn btn-outline-primary" for={`${c.name}`} onClick={() => { labelCategoryClick(c.name) }}>{c.name} </label>
                    </>
                )
                }

            </div>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className={`nav-link  ${brand === '' ? 'active' : ''}`} href="#" onClick={() => {handleBrandClick('')}}>All</a>
                </li>
                {

                    brands.map(item => (
                        <li className='nav-item'>
                            <a className={`nav-link  ${brand === item.name ? 'active' : ''}`} href="#" onClick={() => {handleBrandClick(item.name)}}>{item.name}</a>
                        </li>
                    ))
                }


            </ul>
            {
                
                    (<>
                        <div className=" r-0 mt-5">
                            <button type="button" className="btn btn-success btn-lg ms-auto r-0" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Add Product</button>
                        </div>
                        <table className="table table-hover ms-3 mt-5">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Brand</th>
                                    <th scope="col">Category</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productList.map(product => (<SingleProductAdmin product={product} />))}

                            </tbody>
                        </table>

                    </>)
                    
            }

            <div className="modal fade" id={`staticBackdrop`} data-bs-backdrop="static" tabIndex="-1" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">New Product</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => { setFormData(initProduct) }}></button>
                        </div>
                        <div className="modal-body container-fluid row">
                            <div className="col-6">
                                <div className="input-group pe-2 mb-5">
                                    <span className="input-group-text" id="inputGroup-sizing-default">ID</span>
                                    <input type="text" className="form-control" aria-label="Sizing example input" value='Generate Automatically ' readOnly />
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
                                    <input type="number" className="form-control" aria-label="Sizing example input" name="productDetail.screen" value={formData.productDetail.screen} onChange={(e) => { handleChange(e) }} />
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
                        <div className="input-group mb-3">
                            <input type="file" className="form-control" accept="image/png, image/jpeg" name="images" multiple onChange={(e) => { handleImageChange(e) }} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">Close</button>

                            <button type="button" className="btn btn-primary" onClick={() => { handleSaveClick() }}>Add New</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductAdmin;