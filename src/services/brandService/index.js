import axios from "axios";

import ApiUrl from "../../ApiUrl";

export async function getBrands() {
    return await axios.get(`${ApiUrl}/brand`);
}

export async function postBrand(data) {
    try {
        return await axios.post(`${ApiUrl}/brand`, data, {
            headers: { 'Content-Type': 'application/json' }
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
            };
        }
    }
}

export async function updateBrand(id, data) {
    try {
        return await axios.put(`${ApiUrl}/brand/${id}`, data, {
            headers: { 'Content-Type': 'application/json' }
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
            };
        }
    }
}

export async function deleteBrand(id) {
    return await axios.delete(`${ApiUrl}/brand/${id}`);
}