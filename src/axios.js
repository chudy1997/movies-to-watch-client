import axios from 'axios';
import config from './config.json';

const ROOT_URL = config.REACT_APP_SERVER_URL ? config.REACT_APP_SERVER_URL : process.env.REACT_APP_SERVER_URL;

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