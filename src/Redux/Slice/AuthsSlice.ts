import {createAsyncThunk, createSlice, isFulfilled, isRejected} from "@reduxjs/toolkit";
import {IUser} from "../../Interfaces/userInterface";
import {IAuth} from "../../Interfaces/authInterface";
import {authsService} from "../../Services/loginService";

interface IState{
    me:IUser
    error: boolean
}

const initialState = {
    me:null,
    error: null
}

const login = createAsyncThunk<IUser, {user:IAuth}>(
    'authSlice/login',
    async ({user}, {rejectWithValue}) => {
        try {
            return await authsService.login(user)
        }catch (e){
            console.log(e);
        }
    }
)


const authSlice = createSlice({
    name: ' authSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(login.fulfilled, (state, actions) =>{
                state.me = actions.payload
            })
            .addMatcher(isRejected(login), state => {
                state.error = true
            })
            .addMatcher(isFulfilled(login), state =>{
                state.error = false
            })
})

const {reducer:authReducer, actions} = authSlice;

const authActions = {
    ...actions,
    login
}

export {
    authReducer,
    authActions
}