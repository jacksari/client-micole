import axios from "axios";

const clienteAxios = axios.create({
    baseURL: process.env.apiUrl
})

export default clienteAxios;