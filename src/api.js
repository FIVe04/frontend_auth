import axios from 'axios'

const api = axios.create(
    {
        baseURL: "http://88.210.3.106/api",
    }
)

export default api;