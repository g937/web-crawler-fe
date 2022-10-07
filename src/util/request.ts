import axios, { AxiosRequestConfig } from "axios";

export enum Methods {
  GET = "GET",
}

export interface RequestConfig extends AxiosRequestConfig {
  resource: string;
  method?: Methods;
}

export function generateUrl(resource: string = "") {
  return `http://localhost:3001/api/${resource}`;
}

async function request<T = void>({
  resource,
  method = Methods.GET,
  ...config
}: RequestConfig) {
  const url = generateUrl(resource);

  const requestConfig = {
    method,
    url,
    ...config,
  };

  const { data: response } = await axios.request<T>(requestConfig);

  return response;
}

export default request;