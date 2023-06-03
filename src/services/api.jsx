import axios from "axios";

const baseURL = import.meta.env.VITE_REACT_APP_API_URL;
const api = axios.create({ baseURL })

export function logUp(form) {
    const promise = api.post('/sign-up', form);
    return promise;
}

export function login(form) {
    const promise = api.post('/sign-in', form);
    return promise;
}

export function logOut(id, token){
    const config = {
        headers: `Bearer ${token}`
    }
    const promise = api.delete('/log-out', id, config);
    return promise;
}