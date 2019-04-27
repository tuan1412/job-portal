import CoreAPI from './../utils/core-api';
class JobService {
    constructor() {
        this.core_api = new CoreAPI();
    }

    async getJobs(params) {
        try {
            let data = await this.core_api.post("admin/jobs", params);
            console.log('getJobs response: ', data);
            return data;
        } catch (error) {
            console.log('getJobs error: ', error);
            throw new Error(error);
        }
    }

    async getDetail(params, id) {
        try {
            let data = await this.core_api.post("admin/get_jobs/" + id, params);
            console.log('getDetail response: ', data);
            return data;
        } catch (error) {
            console.log('getDetail error: ', error);
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

export default JobService;