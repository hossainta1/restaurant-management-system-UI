import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
});

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useAuth();

    // Request interceptor to add Authorization header
    axiosSecure.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem('access-token');
            if (token) {
                config.headers.authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error) => Promise.reject(error)
    );

    // Response interceptor to handle 401 and 403 errors
    axiosSecure.interceptors.response.use(
        (response) => response,
        async (error) => {
            console.log("Axios Error:", error); // Debugging: Check full error object

            // Ensure error.response exists before accessing status
            if (error.response) {
                const status = error.response.status;

                if (status === 401 || status === 403) {
                    await logOut();
                    navigate('/login');
                }
            } else {
                console.error("No response received from server:", error);
            }

            return Promise.reject(error);
        }
    );

    return axiosSecure;
};

export default useAxiosSecure;
