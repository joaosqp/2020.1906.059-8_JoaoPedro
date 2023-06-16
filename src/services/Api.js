import axios from "axios";

const api = axios.create({
    baseURL: 'https://raw.githubusercontent.com/joaosqp/apiShop/main/'
})

export default api;