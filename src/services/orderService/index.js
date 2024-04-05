import axios from "axios";
import ApiUrl from "../../utils/ApiUrl";


export async function getAllOrders() {
    return await axios.get(`${ApiUrl}/order`);
}