import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./Layouts/MainLayout";
import {MainListPage} from "./Pages/MainListPage";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index:true, element:<Navigate to={'/login'}/>},
            {path: 'list', element: <MainListPage/>}
        ]
    }
])


export {
    router
}