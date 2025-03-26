import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = BASE_URL
axiosInstance.defaults.withCredentials = true

export default axiosInstance;
