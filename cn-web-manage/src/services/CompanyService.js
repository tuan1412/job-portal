import CoreAPI from '../utils/core-api';
class CompanySerivce {
    constructor() {
        this.core_api = new CoreAPI();
    }
    async checkApi() {
        try {
            let data = await this.core_api.post("admin/jobs");
            console.log('checkApi success', data);
            return data;
        } catch (error) {
            console.log('checkApi error: ', error);
            throw new Error(error);
        }
    }
}

export default CompanySerivce;