import axios from 'axios'
import { BACKEND_URL, BACKEND_URL2 } from '../env/env';

const clienteAxios = axios.create({
    baseURL: `${BACKEND_URL2}`,
    headers: {
        "Content-Type": "application/json"
    }
})

export default clienteAxios;