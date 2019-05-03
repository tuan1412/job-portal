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

    async getDetail(id) {
        try {
            let data = await this.core_api.get("api/get_company_detail/" + id);
            console.log('getCompanies success', data);
            return data;
        } catch (error) {
            console.log('getCompanies error: ', error);
            throw new Error(error);
        }
    }

    async getUsers(params) {
        try {
            let data = await this.core_api.post("admin/company_users", params);
            console.log('getCompanies success', data);
            return data;
        } catch (error) {
            console.log('getCompanies error: ', error);
            throw new Error(error);
        }
    }

    async banUser(params) {
        try {
            let data = await this.core_api.post("admin/ban_user", params);
            console.log('banUser response', data);
            return data;
        } catch (error) {
            console.log('banUser error', error);
            throw new Error(error);
        }
    }

    async getJobs(params, id) {
        try {
            let data = await this.core_api.post("admin/get_jobs/" + id, params);
            console.log('getJobs success', data);
            return data;
        } catch (error) {
            console.log('getJobs error: ', error);
            throw new Error(error);
        }
    }

}

export default CompanySerivce;