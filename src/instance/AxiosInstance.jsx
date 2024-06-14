import axios from "axios";

const axiosInstance = axios.create({
    baseURL : "http://localhost:7000/api/",
    timeout : 100000,
})


export default axiosInstance