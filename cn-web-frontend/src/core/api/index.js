const axios = require('axios');
const qs = require('qs');

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
});

const parseData = (data, isFormData) => {
    if (!isFormData) {
        return qs.stringify(data);
    }
    const formData = new FormData();
    Object.keys(data).forEach(key => {
        formData.append(key, data[key])
    });
    return formData;
}

api.interceptors.request.use((config) => {
    const { isAuth, data, isFormData } = config;
    let cloneConfig = { ...config };
    if (data) {
        cloneConfig.data = parseData(data, isFormData);
    }
    if (isAuth) {
        const token = localStorage.getItem('token');
        if (token) {
            const authHeader = {
                'authorization': `Bearer ${token}`,
            };
            cloneConfig.headers = { ...cloneConfig.headers, ...authHeader };
        }
    }
    return cloneConfig;
}, (err) => {
    return Promise.reject(err);
});

api.interceptors.response.use((response) => {
    return response.data;
}, (err) => {
    return Promise.reject(err);
});

export default api;