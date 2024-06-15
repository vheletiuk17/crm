import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./Layouts/MainLayout";
import {MainListPage} from "./Pages/MainListPage";
import {Login} from "./Components/LoginContainer/Login";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index:true, element:<Navigate to={'login'}/>},
            {path:'login', element:<Login/>},
            {path: 'list', element: <MainListPage/>}
        ]
    }
])


export {
    router
}