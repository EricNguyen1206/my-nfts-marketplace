import axios from "axios";

// Initial axios instance
const axiosCLient = axios.create({
    baseURL:
        process.env.NODE_ENV === "development"
            ? process.env.REACT_APP_DEV_API
            : process.env.REACT_APP_PRODUCTION_API,
    headers: { "Content-Type": "application/json" },
});

// Add a request interceptor
axiosCLient.interceptors.request.use(
    (res) => res,
    (err) => Promise.reject(err)
);

// Add a response interceptor
axiosCLient.interceptors.response.use(
    (res) => res.data,
    (err) => Promise.reject(err)
);

export default axiosCLient;
