import axios from 'axios';
import Cookies from 'js-cookie';

const token = Cookies.get('authToken') ;
console.log("Token from cookie:", token);

const baseApi = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
        "Authorization": token ? `Bearer ${token}` : "",
    },
    withCredentials: true, // ✅ if using httpOnly cookies
});


export default baseApi;
