import axios from "axios";


const baseApi = axios.create({
    baseURL : "https://api-ecommerce-livraria.onrender.com/user/login",
    headers : {
        "Content-Type" : "application/json",
    }
});

export default baseApi;