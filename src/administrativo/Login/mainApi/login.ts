import axios, { AxiosResponse } from 'axios';

interface LoginProps {
  email: string;
  password: string;
}

export function login(props: LoginProps): Promise<AxiosResponse<any>> {
  return axios.post('https://api-ecommerce-livraria.onrender.com/user/login', props);
}
