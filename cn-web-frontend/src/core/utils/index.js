export default {
    sample(array) {
        return array[Math.floor(Math.random() * array.length)];
    },
    formatDate(date) {
        debugger;
        const dateConvert = new Date(date);
        let dd = dateConvert.getDate();
        let mm = dateConvert.getMonth() + 1; //January is 0!

        let yyyy = dateConvert.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        return dd + '-' + mm + '-' + yyyy;
    },
    isAuth() {
        return !!localStorage.getItem('user');
    },
    setAuth({ user, access_token }) {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', access_token);
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
    }
}