import axios from 'axios'
let url = {
    dev: 'https://jsonplaceholder.typicode.com',
}

console.log(url);


let apiCalls = axios.create({
    baseURL: url.dev,
    headers: {
        "Content-Type": "application/json",
    }
})

export {
    apiCalls
};