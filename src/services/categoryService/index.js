
import axios from "axios";

import ApiUrl from "../../utils/ApiUrl";
import authHeader from "../../utils/authHeader";

export async function getCategories() {
    return await axios.get(`${ApiUrl}/category`);
}

export async function postCategory(data) {
    try {
        const res = await axios.post(`${ApiUrl}/category`, data, {
            headers: { 'Content-Type': 'application/json', ...authHeader() }
        });
        console.log(res);
        return res;
    } catch (error) {
        if (error.response.data.statusCode >= 400 && error.response.data.statusCode <= 500) {
            return {
                code: error.response.data.statusCode,
                message: error.response.data.message
            };
        } else {
            return {
                code: 500,
                message: "An error occurred while updating the category."
            };
        }
    }
}

export async function updateCategory(id, data) {
    try {
        return await axios.put(`${ApiUrl}/category/${id}`, data, {
            headers: { 'Content-Type': 'application/json', ...authHeader() }
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
    try{
        return await axios.delete(`${ApiUrl}/category/${id}`, {
            headers: authHeader()
        });
    }catch(error) {
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