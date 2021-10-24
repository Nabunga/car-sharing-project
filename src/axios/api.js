import axios from "axios";

export const URL_FOR_IMAGES = "https://api-factory.simbirsoft1.com";

const api = axios.create({
  baseURL: "https://api-factory.simbirsoft1.com/api",
  headers: {
    "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
    "Content-Type": "application/json",
  },
});

export default api;
