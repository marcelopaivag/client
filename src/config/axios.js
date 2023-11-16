import axios from 'axios'

const axiosClient = axios.create({
    baseURL: process.env.BACKEND_BASEURL
})

export default axiosClient