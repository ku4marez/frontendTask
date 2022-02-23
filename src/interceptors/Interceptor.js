import {backendUrl} from "../constants/Constants";
import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: backendUrl,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    },
});