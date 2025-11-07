import axios from 'axios';

const useAxios = () => {
    const instance = axios.create({
        baseURL: 'https://smart-server-ruddy.vercel.app/'
    });
    return instance
}

export default useAxios;