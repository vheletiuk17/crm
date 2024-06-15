const baseURL = 'http://localhost:8080'

const auth = '/api/v1/auth/login'
const orders = '/api/v1/orders'

const urls = {
    auth:{
        login:auth,
        refresh:`/api/vi/auth/refresh`,
        me: `${auth}/me`
    }
}


export {
    urls, baseURL
}