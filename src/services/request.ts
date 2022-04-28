import axios, { AxiosRequestConfig } from "axios";
import "./axios";

const request = (url: string, options?: AxiosRequestConfig) => {
  return axios({
    url,
    method: "get",
    ...options,
  });
};

export default request;
