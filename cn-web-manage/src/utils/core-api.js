import { CONFIG } from './config';

const axios = require('axios');
class CoreAPI {
    constructor() {
        this.config = CONFIG;
    }

    async getPost(url, params) {
        try {
            let data = await this.post(url, params);
            return data.data;
        } catch (error) {
            return error;
        }
    }

    post(url, params) {
        return new Promise((resolve, reject) => {
            const options = {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                data: params,
                url: this.config.url_server + url,
            };
            resolve(axios(options));
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