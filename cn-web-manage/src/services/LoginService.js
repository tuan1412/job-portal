import CoreAPI from './../utils/core-api';
class LoginService {
    constructor() {
        this.core_api = new CoreAPI();
    }
    async login(params) {
        try {
            let data = await this.core_api.getPost("api/auth/login", params);
            console.log('login response: ', data);
            return data;
        } catch (error) {
            console.log('login error: ', error);
        }
    }
}

export default LoginService;