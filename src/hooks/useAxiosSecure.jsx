import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL : 'http://localhost:5000/'
})
const useAxiosSecure = () => {

    const navigate = useNavigate();
     const {logOut} = useAuth();
    // Request interceptor to add authorized header for secure every api call
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token');
        // console.log('Request stoped by interceptor', token);
        config.headers.authorization = `Bearer ${token}`;
        return config;
      }, function (error) {
        return Promise.reject(error);
      });

    //   interceptor for 401 and 403 status
    axiosSecure.interceptors.response.use(function(response) {
        return response;
    }, async (error) => {
        const status = error.response.status;
        // console.log('status error in the interceptor', status);

        // for 401 and 403 logout the user and navigate the user login page
        if(status === 401 || status === 403){

            await logOut();
            navigate('/login')
        }
        return Promise.reject(error)

    })
    return axiosSecure;
};

export default useAxiosSecure;