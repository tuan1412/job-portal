import CoreAPI from '../utils/core-api';
class AppService {
    constructor() {
        this.core_api = new CoreAPI();
    }
    async checkApi() {
        try {
            let data = await this.core_api.post("admin/companies");
            return data;
        } catch (error) {
            console.log(error);
            throw new Error({error:error});
        }
    }
}

export default AppService;