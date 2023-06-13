import axios from "axios";

const api = axios.create({
    baseURL: 'https://github.com/joaosqp/apiShop/blob/main/produtos.json'
})

export default api;