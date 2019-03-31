import { CONFIG } from './config';

const axios = require('axios');
class CoreAPI {
    constructor() {
        this.config = CONFIG;
    }

    post(url) {
        const options = {
            method: 'POST',
            // headers: { 'content-type': 'application/x-www-form-urlencoded' },
            // data: qs.stringify(data),
            url: this.config.url_server + url,
        };
        console.log('core',options);
        return axios(options);
    }

    get(url) {
        const options = {
            method: 'GET',
            // headers: { 'content-type': 'application/x-www-form-urlencoded' },
            // data: qs.stringify(data),
            url: this.config.url_server + url,
        };
        console.log('core',options);
        return axios(options);
    }
}

export default CoreAPI;