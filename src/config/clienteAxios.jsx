import axios from 'axios'
import { BACKEND_URL } from '../env/env';

const clienteAxios = axios.create({
    baseURL: `${BACKEND_URL}`,
    headers: {
        "Content-Type": "application/json"
    }
})

export default clienteAxios;