import axios from "axios";
import ApiUrl from "../../utils/ApiUrl";
import authHeader from "../../utils/authHeader";


export async function login(loginRequest) {
    
    try{
        const response = await axios.post(`${ApiUrl}/login`, {
            userEmail: loginRequest.email,
            password: loginRequest.password
        },
            {
                headers:
                {
                    'Content-Type': 'application/json'
                }
            })
        if (response?.status === 200) {
            localStorage.setItem('authToken', response.data.token);
        }
        return response;
    } catch(e){
        return e.response;
    }
}

export async function register(request) {
    try{
        const response = await axios.post(`${ApiUrl}/register`, request, {
            headers: {'Content-Type': 'application/json'}
        })
        if (response?.status === 200) {
            localStorage.setItem('authToken', response.data.token);
        }
        return response;

    }catch(e){
        return e.response;
    }
}

