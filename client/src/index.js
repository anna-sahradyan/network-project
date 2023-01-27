import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from "react-router-dom";
import App from './App';
import './index.css';
import {Provider} from "react-redux";
import rootReducer from "../src/store/index.js";
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
    reducer: rootReducer,
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Router>
            <App/>

        </Router>

    </Provider>
);


