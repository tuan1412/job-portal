import CoreAPI from './../utils/core-api';
class HomeService {
    constructor() {
        this.core_api = new CoreAPI();
    }
    async getWorks() {
        try {
            let data = await this.core_api.post("auth/login");
            console.log('trongnv', data);
            return data;
        } catch (error) {
            console.log('trongnv', error);
        }
    }
}

export default HomeService;