import baseApi from "./config";


interface LoginProps{
    email : string;
    senha : string;
}

export function login(props: LoginProps){
    return baseApi.post("https://api-ecommerce-livraria.onrender.com/user/login", props);
}
