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