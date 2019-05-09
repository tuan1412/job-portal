import { ROLE_MANAGER, ROLE_CANDIDATE } from "./constant";

export default {
    sample(array) {
        return array[Math.floor(Math.random() * array.length)];
    },
    formatDate(date, format = 'dd-mm-yyyy') {
        const dateConvert = new Date(date);
        let dd = dateConvert.getDate();
        let mm = dateConvert.getMonth() + 1; //January is 0!

        if (format === 'dd-mm-yyyy') {
            let yyyy = dateConvert.getFullYear();
            if (dd < 10) {
                dd = '0' + dd;
            }
            if (mm < 10) {
                mm = '0' + mm;
            }
            return dd + '-' + mm + '-' + yyyy;
        }
    },
    isAuth() {
        return !!localStorage.getItem('user');
    },
    setAuth({ user, access_token }) {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', access_token);
    },
    logout() {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    },
    getUserInfo() {
        if (!this.isAuth()) return;
        const user = localStorage.getItem('user');
        return JSON.parse(user);
    },
    getPermission() {
        const userInfo = this.getUserInfo();
        if (!userInfo) return;
        return userInfo.role;
    },
    isAuthUser(id) {
        const userInfo = this.getUserInfo();
        if (!userInfo) return false;
        return parseInt(id, 10) === parseInt(userInfo.id);
    },
    isCandidateUser() {
        return this.isAuth() && this.getPermission() === ROLE_CANDIDATE
    },
    buildAvatarUrl(url, type='candidate') {
        if (!url || url === 'default' || url === '') {
            return type === 'candidate' ? '/images/default-image.png' : '/images/default-company.png';
        }
        return `${process.env.REACT_APP_API_URL}/${url}`;
    },
    isCompanyManager(id) {
        const userInfo = this.getUserInfo();
        const company_id = parseInt(id, 10);
        return userInfo  && userInfo['company_id'] === company_id && userInfo['role'] === ROLE_MANAGER;
    },
    
}