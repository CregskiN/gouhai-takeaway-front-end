import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';


import './App.css';
import logo from './imgs/logo.jpg';

import Header from './common/Header/index.jsx'
import Order from './pages/Order/Order.jsx'

function App(props) {

    return (
        <div className='App'>
            <Header logo={logo}/>

            <BrowserRouter>
                <Route path='/' component={Order}/>
            </BrowserRouter>


        </div>
    );
}

export default App;
