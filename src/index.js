import React from 'react'
import ReactDOM from 'react-dom';

import './style.css';
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import App from './App';
import { AppProvider } from './context';



ReactDOM.createRoot(document.getElementById('root')).render(
    
    <React.StrictMode>
        <AppProvider>
            <App />
        </AppProvider>
    </React.StrictMode>
)
// ReactDom.render(<App />, document.querySelector("#root"))