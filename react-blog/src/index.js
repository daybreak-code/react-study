import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import router from './router'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux';  
import store from './store';


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>  
        <RouterProvider router={router} />
    </Provider>  
)