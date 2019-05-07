import api from ".";
import _ from '../utils';
import { ROLE_CANDIDATE, ROLE_MANAGER } from "../utils/constant";

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
        return api({
            method: 'post',
            url: '/api/auth/candidate_user/signup',
            data: { username, password, email, avatar },
            isFormData: true
        })
    },

    signUpCompany({ username, company_name, password, email, avatar }) {
        return api({
            method: 'post',
            url: '/api/auth/candidate_user/signup',
            data: { username, company_name, password, email, avatar },
            isFormData: true
        })

    },

    searchJob({ title = '', location: address = '', category = '', page = 1 }) {
        return api({
            method: 'post',
            url: '/api/find_job',
            data: { title, address, category, page, per_page: 10 },
        })
    },

    getCategories() {
        return api({
            method: 'get',
            url: '/api/get_list_categories',
        })
    },

    searchJobByCompany({ company_id, page, status }) {
        return api({
            method: 'post',
            url: '/api/company_user/get_jobs',
            data: { company_id, status, page, per_page: 10 },
            isAuth: true
        })

    },

    getDetailJob({ id }) {
        return new Promise((resolve, reject) => {
            api({
                method: 'get',
                url: `/api/get_job_detail/${id}`,
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

    searchJobAdvance({ category, expireDate, fromSalary = 0, address, title, toSalary, page = 1 }) {
        expireDate = expireDate || '1970-01-01';
        toSalary = toSalary || 10000;
        return api({
            method: 'post',
            url: '/api/find_job_advance',
            data: {
                category,
                title,
                expire_date: _.formatDate(expireDate),
                from_salary: fromSalary,
                to_salary: toSalary,
                address,
                page,
                per_page: 10
            }
        })
    },

    createJob({
        category: category_name,
        title, address,
        fromSalary: from_salary,
        toSalary: to_salary,
        expireDate: expire_date,
        description
    }) {
        const company_id = _.getUserInfo()['company_id'];
        return api({
            method: 'post',
            url: `/api/company_user/create_job/${company_id}`,
            data: {
                category_name,
                title,
                expire_date: expire_date,
                from_salary,
                to_salary,
                address,
                description,
            },
            isAuth: true
        })

    },
    getDetailUser({ id }) {
        const userInfo = _.getUserInfo();
        if (userInfo && userInfo['id'] === parseInt(id, 10) && userInfo['role'] === ROLE_CANDIDATE) {
            return api({
                method: 'get',
                url: '/api/candidate_user/detail',
                isAuth: true
            })
        };
        return api({
            method: 'get',
            url: `/api/get_user_detail/${id}`,
        })
    },
    updateCV({ name, id }) {
        return api({
            method: 'post',
            url: `/api/candidate_user/update_cv/${id}`,
            data: { name },
            isAuth: true
        })
    },
    delete({ id }) {
        return api({
            method: 'delete',
            url: `/api/candidate_user/delete_cv/${id}`,
            isAuth: true
        })
    },
    createCV({ name, cv }) {
        const userInfo = _.getUserInfo();
        const { id } = userInfo;
        return api({
            method: 'post',
            url: '/api/candidate_user/create_cv',
            data: { name, cv, user_id: id },
            isAuth: true,
            isFormData: true
        })
    },
    getDetailCompany({ id }) {
        const userInfo = _.getUserInfo();
        if (userInfo && userInfo['company_id'] === parseInt(id, 10) && userInfo['role'] === ROLE_MANAGER) {
            return new Promise((resolve, reject) => {
                Promise.all([
                    api({
                        method: 'get',
                        url: '/api/get_company_detail/1'
                    }),
                    api({
                        method: 'post',
                        url: '/api/company_user/get_users',
                        data: {
                            company_id: id,
                            page: 1,
                            per_page: 1000
                        },
                        isAuth: true
                    })
                ]).then((res) => {
                    const company = res[0].company;
                    const listUsers = res[1].data;
                    resolve({ company: { ...company, listUsers } })
                }).catch((err) => {
                    reject(err);
                })
            })

        };
        return api({
            method: 'get',
            url: '/api/get_company_detail/1'
        })
    }
}