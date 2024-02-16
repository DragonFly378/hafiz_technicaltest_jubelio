import axiosConfig from "./axiosClient";
import axios from "axios";

const productsApi = {
  getAllProducts: (params) => {
    const url = "products";
    return axiosConfig.get(url, params);
  },
};

export default productsApi;
