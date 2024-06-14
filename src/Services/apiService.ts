import axios, {AxiosResponse} from "axios";
import {baseURL} from "../Constants/urls";
import {authsService} from "./loginService";


export type IRes<T> =Promise<AxiosResponse<T>>

const apiServices = axios.create({baseURL})
apiServices.interceptors.request.use(req =>{
    const accessToken = authsService.getAccessToken();
    if (accessToken){
        req.headers.Authorization = `Bearer ${accessToken}`
    }

    return req
})

export {
    apiServices
}