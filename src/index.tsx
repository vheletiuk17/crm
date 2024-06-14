import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.style.css'
import {RouterProvider} from "react-router";
import {router} from "./router";
import {Provider} from "react-redux";
import {store} from "./Redux/store";
// import {Provider} from "react-redux";
// import {store} from "./Redux/store";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
);

