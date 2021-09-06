import axios from 'axios'
let url = {
    dev: 'https://jsonplaceholder.typicode.com',
}

let apiCalls = axios.create({
    baseURL: url.dev,
    headers: {
        "Content-Type": "application/json",
    }
})

export {
    apiCalls
};