import {BACKEND_URL} from "../constants/Constants";
import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: BACKEND_URL,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    },
});