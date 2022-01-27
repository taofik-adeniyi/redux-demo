import axios from 'axios'


const axiosFetch = axios.create({
    baseURL: "https://fakestoreapi.com/"
})

export default axiosFetch