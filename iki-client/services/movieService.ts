import axios from "axios";

const baseURL = 'http://localhost:3003/api';

const getAllMovies = async () => {
    const response = await axios.get(`${baseURL}/movies`)
    return response.data
}

const getMovieById = async (id: string) => {
    const response = await axios.get(`${baseURL}/movies/${id}`)
    return response.data
}

export default { getAllMovies, getMovieById }