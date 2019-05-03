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
                console.log('data_trongnv',res);
                resolve(res.data);
            }, err => {console.log('data_trongnv',err);
                reject(err.response.data);
            });
        })
    }
}

export default CoreAPI;