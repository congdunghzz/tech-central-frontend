import axios from "axios"

import ApiUrl from "../../ApiUrl"




export async function getProducts() {
    return await axios.get(`${ApiUrl}/product`);
}



export async function postNewProduct(formData) {
    try{

        return await axios.post(`${ApiUrl}/product`, formData,
            {
                headers: { 'Content-Type': `multipart/form-data` }
            }
        );
    } catch (error) {
        if (error.response.data.statusCode >= 400) {
            return {
                code : error.response.data.statusCode,
                message: error.response.data.message
             }; 
        } else {
            return { error: "An error occurred while updating the product." }; 
        }
    }
}

export async function updateProduct(productId, product) {
    try {

        return await axios.put(`${ApiUrl}/product/${productId}`, product,
            {
                headers: { 'Content-Type': 'application/json' }
            },
            { validateStatus: false }
        );
    } catch (error) {
        if (error.response.data.statusCode >= 400) {
            return {
                code : error.response.data.statusCode,
                message: error.response.data.message
             }; 
        } else {
            return { error: "An error occurred while updating the product." }; 
        }
    }

}
export async function deleteProduct(productId) {
    return await axios.delete(`${ApiUrl}/product/${productId}`);
}