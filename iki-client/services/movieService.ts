import axios, { AxiosError } from "axios";
import { Platform } from 'react-native';

const baseURL = Platform.select({
    android: 'http://10.0.2.2:3003/api',
    default: 'http://localhost:3003/api'
});

const getAllMovies = async () => {
    console.log('Requesting from URL:', baseURL);
    try {
        const response = await axios.get(`${baseURL}/movies`);
        console.log('API Response Status:', response.status);
        console.log('Data received:', response.data);
        return response.data;
    } catch (error: unknown) {
        const axiosError = error as AxiosError;
        console.log('Network Error Details:', {
            message: axiosError.message,
            config: axiosError.config,
            status: axiosError.response?.status
        });
        throw error;
    }
}

const getMovieById = async (id: string) => {
    const response = await axios.get(`${baseURL}/movies/${id}`)
    return response.data
}

export default { getAllMovies, getMovieById }
