import axios from "axios"

import ApiUrl from "../../utils/ApiUrl"
import authHeader from "../../utils/authHeader";



export async function getProducts() {
    return await axios.get(`${ApiUrl}/product`);
}

export async function getProductsByCategory(categoryName, page, size) {
    return await axios.get(`${ApiUrl}/product/category?name=${categoryName}&page=${page}&size=${size}` );
}

export async function getNewProduct(size) {
    return await axios.get(`${ApiUrl}/product/newProduct?size=${size}` );
}

export async function getProductsByCategoryAndBrand(category, brand, page, size) {
    return await axios.get(`${ApiUrl}/product/category/brand`, {
        params: {
            category,
            brand,
            page,
            size
        }
    });
}
export async function searchForName(key, page, size) {
    return await axios.get(`${ApiUrl}/product/search`, {
        params: {
            key,
            page,
            size
        }
    });
}

export async function getProductById(id) {
    try {
        const res = await axios.get(`${ApiUrl}/product/${id}`);
        return res;
    } catch (error) {
       
    }
}

export async function postNewProduct(formData) {
    try {

        return await axios.post(`${ApiUrl}/product`, formData,
            {
                headers: { 
                    'Content-Type': `multipart/form-data` ,
                    ...authHeader()
                }
            }
        );
    } catch (error) {
        if (error.response.data.statusCode >= 400) {
            return {
                code: error.response.data.statusCode,
                message: error.response.data.message
            };
        } else {
            return {
                code: 500,
                message: "An error occurred while updating the product."
            }
        }
    }
}

export async function updateProduct(productId, product) {
    try {

        return await axios.put(`${ApiUrl}/product/${productId}`, product,
            {
                headers: { 'Content-Type': 'application/json', ...authHeader()}
            },
            { validateStatus: false }
        );
    } catch (error) {
        if (error.response.data.statusCode >= 400) {
            return {
                code: error.response.data.statusCode,
                message: error.response.data.message
            };
        } else {
            return {
                code: 500,
                message: "An error occurred while updating the product."
            }
        }
    }

}
export async function deleteProduct(productId) {
    return await axios.delete(`${ApiUrl}/product/${productId}`, 
    {
        headers: authHeader()
    });
}


export async function importImages(productId, formData) {

    try {
        return await axios.post(`${ApiUrl}/product/${productId}/image`, formData , {
            headers: { 'Content-Type': 'multipart/form-data'}
        });
    } catch (error) {
        if (error.response.data.statusCode >= 400) {
            return {
                code: error.response.data.statusCode,
                message: error.response.data.message
            };
        } else {
            return {
                code: 500,
                message: "An error occurred while updating the product."
            }
        }
    }

}