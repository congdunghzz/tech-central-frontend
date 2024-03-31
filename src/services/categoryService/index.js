
import axios from "axios";

import ApiUrl from "../../ApiUrl";


export async function getCategories() {
    return await axios.get(`${ApiUrl}/category`);
}