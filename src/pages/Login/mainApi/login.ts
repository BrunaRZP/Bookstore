import baseApi from "./config";


interface LoginProps{
    email : string;
    senha : string;
}

export function login(props: LoginProps){
    return baseApi.post("/login", props);
}