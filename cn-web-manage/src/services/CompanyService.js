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
            console.log('getDetail success', data);
            return data;
        } catch (error) {
            console.log('getDetail error: ', error);
            throw new Error(error);
        }
    }

    async getUsers(params) {
        try {
            let data = await this.core_api.post("admin/company_users", params);
            console.log('getUsers success', data);
            return data;
        } catch (error) {
            console.log('getUsers error: ', error);
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

    async acceptJob(params){
        try {
            let data = await this.core_api.post("admin/accept_job", params);
            console.log('acceptJob response: ', data);
            return data;
        } catch (error) {
            console.log('acceptJob error: ', error);
            throw new Error(error);
        }
    }

    async rejectJob(params){
        try {
            let data = await this.core_api.post("admin/reject_job", params);
            console.log('rejectJob response: ', data);
            return data;
        } catch (error) {
            console.log('rejectJob error: ', error);
            throw new Error(error);
        }
    }

}

export default CompanySerivce;