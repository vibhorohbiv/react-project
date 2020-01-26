import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burger-app-214ec.firebaseio.com/'
})

export default instance;