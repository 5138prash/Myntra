import axios from 'axios';
import Cookies from 'js-cookie';

const token = Cookies.get('authToken') ;
console.log("Token from cookie:", token);

const baseApi = axios.create({
    baseURL: "https://myntra-4b99.onrender.com/api",
    headers: {
        "Content-Type": "application/json",
        "Authorization": token ? `Bearer ${token}` : "",
    },
    withCredentials: true, // ✅ if using httpOnly cookies
});


export default baseApi;
