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
                if (err && err.response && err.response.data)
                    reject(err.response.data);
                reject(err);
            });
        })
    }

    get(url) {
        let headers = {};
        let access_token = localStorage.getItem("access_token");
        if (!!access_token) {
            headers['Authorization'] = 'Bearer ' + access_token
        }
        return new Promise((resolve, reject) => {
            const options = {
                method: 'GET',
                headers: headers,
                url: this.config.url_server + "/" + url,
            };
            axios(options).then(res => {
                resolve(res.data);
            }, err => {
                if (err && err.response && err.response.data)
                    reject(err.response.data);
                reject(err);
            });
        })
    }
}

export default CoreAPI;