import { apiCalls as api } from './API';


export const PostWithoutHeader = async (path, data) => {
    let res = (await api.post(path, data));
    return res;
}


export const GetWithoutHeader = async (path, data) => {
    let res = (await api.get(path, data));
    return res;
}


export const PutWithoutHeader = async (path, data) => {
    let res = (await api.put(path, data));
    return res;
}


export const DelWithoutHeader = async (path, data) => {
    let res = (await api.delete(path, data));
    return res;
}
