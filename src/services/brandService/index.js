import axios from "axios";

import ApiUrl from "../../ApiUrl";

export async function getBrands() {
    return await axios.get(`${ApiUrl}/brand`);
}