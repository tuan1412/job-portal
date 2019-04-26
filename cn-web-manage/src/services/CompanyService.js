import CoreAPI from '../utils/core-api';
class CompanySerivce {
    constructor() {
        this.core_api = new CoreAPI();
    }
    async getCompanies(params) {
        try {
            let data = await this.core_api.post("admin/companies", params);
            console.log('getCompanies success', data);
            return data;
        } catch (error) {
            console.log('getCompanies error: ', error);
            throw new Error(error);
        }
    }
}

export default CompanySerivce;