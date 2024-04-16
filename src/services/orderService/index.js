import axios from "axios";
import ApiUrl from "../../utils/ApiUrl";
import authHeader from "../../utils/authHeader";


export async function getAllOrders(status) {
    try{
        const response = await axios.get(`${ApiUrl}/order?status=${status}`, {
            headers: {
                'Content-Type' : 'application/json',
                ...authHeader(),
            },
        });
        return response;
    }catch(error) {
        return error.response;
    }
}

export async function getMyOrders() {
    try{
        const response = await axios.get(`${ApiUrl}/order/myOrders`, {
            headers: {
                'Content-Type' : 'application/json',
                ...authHeader(),
            },
        });
        return response;
    }catch(error) {
        return error.response;
    }
}

export async function createOrder(request) {
    try{
        const response = await axios.post(`${ApiUrl}/order`, request, {
            headers: {
                'Content-Type' : 'application/json',
                ...authHeader(),
            },
        });
        return response;
    }catch(error) {
        return error.response;
    }
}

export async function cancelOrder(id) {
    try{
        const response = await axios.put(`${ApiUrl}/order/${id}/status`, 'CANCELED', {
            headers: {
                'Content-Type' : 'application/json',
                ...authHeader(),
            },
        });
        return response;
    }catch(error) {
        return error.response;
    }
}
export async function finishOrder(id) {
    try{
        const response = await axios.put(`${ApiUrl}/order/${id}/status`,'FINISHED', {
            headers: {
                'Content-Type' : 'application/json',
                ...authHeader(),
            },
        });
        return response;
    }catch(error) {
        return error.response;
    }
}

export async function acceptOrder(id) {
    try{
        const response = await axios.put(`${ApiUrl}/order/${id}/status`,'SHIPPING', {
            headers: {
                'Content-Type' : 'application/json',
                ...authHeader(),
            },
        });
        return response;
    }catch(error) {
        return error.response;
    }
}