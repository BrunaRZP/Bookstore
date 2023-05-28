import axios from "axios";


const baseApi = axios.create({
    baseURL : "http://localhost:5000",
    headers : {
        "Content-Type" : "aplication/jason",
    }
});

export default baseApi;