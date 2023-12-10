import axios, { AxiosInstance } from "axios";
import User from "@/types/User";
const  user = JSON.parse(window.localStorage.getItem('user') || '{}') as User;
const  token  = user.token

const apiClient: AxiosInstance = axios.create({
  baseURL: "https://lmsv2.mlieducation.org/api",
  headers: {
    'api-key': '75fbbc80-dc80-11ed-889e-3dee47f49cdb',
    'Accept' : 'application/json',
    Authorization: `Bearer ${token}`,
  },
});

export default apiClient;
