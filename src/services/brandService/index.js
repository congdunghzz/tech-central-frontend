import axios from "axios";

import ApiUrl from "../../utils/ApiUrl";
import authHeader from "../../utils/authHeader";

export async function getBrands() {
    return await axios.get(`${ApiUrl}/brand`);
}

export async function postBrand(data) {
    try {
        return await axios.post(`${ApiUrl}/brand`, data, {
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

export async function updateBrand(id, data) {
    try {
        const res = await axios.put(`${ApiUrl}/brand/${id}`, data, {
            headers: { 'Content-Type': 'application/json', ...authHeader() }
        });
        console.log(res);
        return res;
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
    try{
        return await axios.delete(`${ApiUrl}/brand/${id}`, {
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