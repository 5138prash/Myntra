import axios from 'axios';
import Cookies from 'js-cookie';

const token = Cookies.get('authToken') ;
console.log("Token from cookie:", token);

const baseApi = axios.create({
    baseURL: "http://localhost:3000/api/",
    headers: {
        "Content-Type": "application/json",
        "Authorization": token ? `Bearer ${token}` : "",
    },
    withCredentials: true, // ✅ if using httpOnly cookies
});


export default baseApi;
