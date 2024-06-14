import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./Slice/AuthsSlice";

const store = configureStore({
    reducer: {
        auth:authReducer
    }
})


export {
    store
}