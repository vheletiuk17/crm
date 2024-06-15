
import {ITokens} from "../Interfaces/tokenInterface";
import {IAuth} from "../Interfaces/authInterface";
import {IUser} from "../Interfaces/userInterface";
import {apiServices} from "./apiService";
import {urls} from "../Constants/urls";

const accessTokenKey = 'access'
const refreshTokenKey = 'refresh'


const authsService = {
    async login(user:IAuth):Promise<IUser>{
        const {data} = await apiServices.post(urls.auth.login, user)
        this.setTokens(data)

    },

    async getUserData(): Promise<IUser> {
        const accessToken = this.getAccessToken();
        const { data } = await apiServices.get(urls.auth.me, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        console.log(data);
        return data;
    },

    async refresh():Promise<void>{
        const refreshToken = this.getRefreshToken();
       const {data} = await  apiServices.post(urls.auth.refresh, {refresh:refreshToken})
        this.setTokens(data)
    },

    setTokens({access, refresh}:ITokens):void{
        localStorage.setItem(accessTokenKey, access)
        localStorage.setItem(refreshTokenKey, refresh)
    },

    getAccessToken():string{

        return localStorage.getItem(accessTokenKey)
    },

    getRefreshToken():string{

        return localStorage.getItem(refreshTokenKey)
    }
}

export {
    authsService
}