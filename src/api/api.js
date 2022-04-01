import * as axios from "axios";




const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'APi-KEY': '0a0d2895-00a2-4054-9ce2-cbe1e2fb9acf'
    }
})

export const userAPI = {
    getUsers (pageNumber = 1, pageSize) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
        .then (response => {
                  return response.data
              })
    },

    followUser (user) {
        return instance.post(`follow/${user}`, {})
        .then (response => {
            return response.data
        })
    },

    unFollowUser (user)  {
        return instance.delete(`follow/${user}`)
        .then (response => {
            return response.data
        })
    },

    loginUser () {
        return instance.get(`auth/me`)
        .then (response => {
            return response.data
        })
    },
    getProfile(userId) {
        return profileAPI.getProfile(userId)
        
    },
    loginMe(email, password, rememberMe=false) {
        return instance.post(`auth/login`, { email, password, rememberMe})
    },
    
    logoutMe() {
        return instance.delete(`auth/login`)
    },

}


export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
        
    },

    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {
            status
        })
    }
}









