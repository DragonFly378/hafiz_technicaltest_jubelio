import axios from "axios";
import ApiConfig from "./ApiConfig";

// const isDev = process.env.NODE_ENV === "development";

let axiosConfig;
axiosConfig = axios.create();

const config = {
  baseURL: ApiConfig.baseUrl,
  headers: {},
};
axiosConfig = axios.create(config);

// const isLocalDev = (isDev) => {

// };

// const axiosClient = isLocalDev(isDev);

// axiosClient.interceptors.request.use(async (config) => config);
// axiosClient.interceptors.response.use(
//   (response) => {
//     if (response && response.data) {
//       return response.data;
//     }
//     return response;
//   },
//   (error) => {
//     throw error;
//   }
// );
export default axiosConfig;
