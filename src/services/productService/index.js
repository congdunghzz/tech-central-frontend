import axios from "axios"

import ApiUrl from "../../ApiUrl"




export async function getProducts() {
    return await axios.get(`${ApiUrl}/product`);
}

export async function postNewProduct(formData) {
    return await axios.post(`${ApiUrl}/product`, formData,
        {
            headers: { 'Content-Type': `multipart/form-data` }
        }
    );
}

export async function updateProduct(productId, product) {
    return await axios.put(`${ApiUrl}/product/${productId}`, product,
        {
            headers: { 'Content-Type': 'application/json' }
        }
    );


}
export async function deleteProduct(productId) {
    return await axios.delete(`${ApiUrl}/product/${productId}`);
}