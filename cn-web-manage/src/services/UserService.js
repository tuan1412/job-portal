import CoreAPI from '../utils/core-api';
class UserService {
    constructor() {
        this.core_api = new CoreAPI();
    }
    async getUsers(params) {
        try {
            let data = await this.core_api.post("admin/candidate_users", params);
            console.log('getUsers response', data);
            return data;
        } catch (error) {
            console.log('getUsers error', error);
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
}

export default UserService;