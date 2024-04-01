
import axios from "axios";

import ApiUrl from "../../ApiUrl";


export async function getCategories() {
    return await axios.get(`${ApiUrl}/category`);
}

export async function postCategory(data) {
    try {
        return await axios.post(`${ApiUrl}/category`, data, {
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

export async function updateCategory(id, data) {
    try {
        return await axios.put(`${ApiUrl}/category/${id}`, data, {
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

export async function deleteCategory(id) {
    return await axios.delete(`${ApiUrl}/category/${id}`);
}