import axios from 'axios';

const ROOT_URL = config.SERVER_URL ? config.SERVER_URL : process.env.SERVER_URL;

export function get(url, payload){
    return axios({
        method: 'get',
        url: `${ROOT_URL}/${url}`,  
        params: payload
    });
}

export function post(url, payload){
    return axios({
        method: 'post',
        url: `${ROOT_URL}/${url}`,
        params: payload
    });
}

export function put(url, payload){
    return axios({
        method: 'put',
        url: `${ROOT_URL}/${url}`,
        params: payload
    });
}

export function del(url, payload){
    return axios({
        method: 'delete',
        url: `${ROOT_URL}/${url}`,
        params: payload
    });
}