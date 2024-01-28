import axios from "axios";

const apiBaseURL = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}`;
//author
const AxiosService = axios.create({
  baseURL: apiBaseURL, // server - browser
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  method: "GET",
});

AxiosService.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
//chỉ lại token và refresh token
AxiosService.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    if (err.response.status === 401) {
      localStorage.clear();
      window.location.href = "/login";
    }
    return Promise.reject(err);
  }
);

export { AxiosService };
