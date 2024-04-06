import axios from "axios";
import ApiUrl from "../../utils/ApiUrl";
import authHeader from "../../utils/authHeader";


export async function getAllOrders() {
    try{
        const response = await axios.get(`${ApiUrl}/order`, {
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