import axios from "axios"
import ApiUrl from "../../utils/ApiUrl"
import authHeader from "../../utils/authHeader";

export async function getUserById(userId){
    try {
        const res = await axios.get(`${ApiUrl}/user/${userId}`, {
            headers: {
                'Content-Type' : 'application/json',
                ...authHeader(),
            },
        });
        return res;
    } catch(error) {
        return error.response;
    }
}

export async function getMyProfile(){
    try {
        const res = await axios.get(`${ApiUrl}/user/myProfile`, {
            headers: {
                'Content-Type' : 'application/json',
                ...authHeader(),
            },
        });
        return res;
    } catch(error) {
        return error.response;
    }
}


export async function updateProfile(request){
    try {
        const res = await axios.put(`${ApiUrl}/user/myProfile`, request, {
            headers: {
                'Content-Type' : 'application/json',
                ...authHeader(),
            },
        });
        return res;
    } catch(error) {
        return error.response;
    }
}