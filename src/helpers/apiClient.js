import axios from "axios";

const BASE_URL = "https://staging-api.hellothematic.com";

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const _get = (url, config = {}) => {
  return apiClient.get(url, config);
};

export { _get };
