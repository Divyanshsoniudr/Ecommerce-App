import axios from "axios";
//make token using POSTMAN for admin
const BASE_URL = "https://localhost:5000/api";
const TOKEN ="";
export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN}`},
});