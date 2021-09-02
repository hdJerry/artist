import { apiCalls as api } from './api';
// let {token} = JSON.parse(window.localStorage.getItem('user'));


export const PostWithoutHeader = (path, data) => {
    let res = (await api.post(path, data));
    return res;
}


export const GetWithoutHeader = (path, data) => {
    let res = (await get.get(path, data));
    return res;
}


export const PostWithHeader = (path,data) => {
    let {token} = JSON.parse(window.localStorage.getItem('user'));
    let res = (await api.post(path, data, {
        Authorization: `Bearer ${token}`
    }));
    return res;
}


export const GetWithHeader = (path,data) => {
    let {token} = JSON.parse(window.localStorage.getItem('user'));
    let res = (await api.get(path, data, {
        Authorization: `Bearer ${token}`
    }));
    return res;
}