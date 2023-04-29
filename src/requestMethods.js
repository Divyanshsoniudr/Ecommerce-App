import axios from "axios";

const BASE URL = "https://localhost:5000/api";
const 
export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:"Bearer"}
});