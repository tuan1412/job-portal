import api from ".";
import _ from '../utils';

export default {
    login({ username, password }) {
        return new Promise((resolve, reject) => {
            api({
                method: 'post',
                url: '/api/auth/login',
                data: { username, password }
            })
                .then((res) => {
                    _.setAuth(res);
                    resolve(res);
                })
                .catch((err) => reject(err));
        });
    },

    signUpCandidate({ username, password, email, avatar }) {
        return new Promise((resolve, reject) => {
            api({
                method: 'post',
                url: '/api/auth/candidate_user/signup',
                data: { username, password, email, avatar },
                isFormData: true
            })
                .then((res) => resolve(res))
                .catch((err) => reject(err));
        });
    },

    signUpCompany({ username, company_name, password, email, avatar }) {
        return new Promise((resolve, reject) => {
            api({
                method: 'post',
                url: '/api/auth/candidate_user/signup',
                data: { username, company_name, password, email, avatar },
                isFormData: true
            })
                .then((res) => resolve(res))
                .catch((err) => reject(err));
        });
    },

    searchJob({ title = '', location: address = '', category = '', page = 1 }) {
        return new Promise((resolve, reject) => {
            api({
                method: 'post',
                url: '/api/find_job',
                data: { title, address, category, page, per_page: 10 },
            })
                .then((res) => resolve(res))
                .catch((err) => reject(err));
        });
    },

    getCategories() {
        return new Promise((resolve, reject) => {
            api({
                method: 'get',
                url: '/api/get_list_categories',
            })
                .then((res) => resolve(res))
                .catch((err) => reject(err));
        });
    },

    searchJobByCompany({ company_id, page, status }) {
        return new Promise((resolve, reject) => {
            api({
                method: 'post',
                url: '/api/company_user/get_jobs',
                data: { company_id, status, page, per_page: 10 },
                isAuth: true
            })
                .then((res) => resolve(res))
                .catch((err) => reject(err));
        });
    },

    getDetailJob({ id }) {
        return new Promise((resolve, reject) => {
            api({
                method: 'get',
                url: `api/get_job_detail/${id}`,
            })
                .then((res) => {
                    if (res.length === 0) {
                        reject(res);
                    } else {
                        resolve(res[0])
                    }
                })
                .catch((err) => reject(err));
        })
    },

    searchJobAdvance({ category, expireDate, fromSalary = 0, location, title, toSalary, page = 1 }) {
        expireDate = expireDate || '1970-01-01';
        toSalary = toSalary || 10000;
        return new Promise((resolve, reject) => {
            api({
                method: 'post',
                url: 'api/find_job_advance',
                data: {
                    category,
                    title,
                    expire_date: _.formatDate(expireDate),
                    from_salary: fromSalary,
                    to_salary: toSalary,
                    address: location,
                    page,
                    per_page: 10
                }
            })
                .then((res) => resolve(res))
                .catch((err) => reject(err));
        })
    }
}