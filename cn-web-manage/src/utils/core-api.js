import { CONFIG } from './config';

const axios = require('axios');
class CoreAPI {
    constructor() {
        this.config = CONFIG;
    }

    post(url, params) {
        let headers = { 'content-type': 'application/json' };
        let access_token = localStorage.getItem("access_token");
        if (!!access_token) {
            headers['Authorization'] = 'Bearer ' + access_token
        }
        return new Promise((resolve, reject) => {
            const options = {
                method: 'POST',
                headers: headers,
                data: params,
                url: this.config.url_server + "/api/" + url,
            };
            axios(options).then(res => {
                resolve(res.data);
            }, err => {
                reject(err.response.data);
            });
        })
    }

    get(url) {
        const options = {
            method: 'GET',
            // headers: { 'content-type': 'application/x-www-form-urlencoded' },
            // data: qs.stringify(data),
            url: this.config.url_server + url,
        };
        console.log('core', options);
        return axios(options);
    }
}

export default CoreAPI;