import axios from "axios"

import ApiUrl from "../../ApiUrl"




export async function getProducts () {
    return await axios.get(`${ApiUrl}/product`);
}