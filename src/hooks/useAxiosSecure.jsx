import axios from "axios";
import useAuth from "./useAuth"
import { useEffect } from "react";

const useAxiosSecure = () => {
    const { user , logOutUser} = useAuth()
    const token = user?.accessToken;
    const instance = axios.create({
        baseURL: 'http://localhost:3000/'
    });
    useEffect(() => {
        instance.interceptors.request.use((config) => {
            config.headers.authorization = `Bearer  ${token}`
            return config;
        })
        instance.interceptors.response.use(res => {
            return res
        }, (errr) => {
            const status = errr.response.request.status;
            if (status === 401 || status === 403) {
                logOutUser()
            }
        })
    }, [token])
    return instance;
}

export default useAxiosSecure;