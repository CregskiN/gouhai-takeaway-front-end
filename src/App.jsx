import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';


import './App.css';
import logo from './static/imgs/logo.jpg';

import Header from './common/Header/index.jsx'
import Order from './pages/Order/Order.jsx'

import {GlobalIconFont} from './static/iconfont/iconfont.js';
import {GlobalStyle} from './static/style.js';

function App(props) {

    return (
        <div className='App'>

            <Header logo={logo}/>

            <BrowserRouter>
                <Route path='/' component={Order}/>


            </BrowserRouter>

            <GlobalIconFont />
            <GlobalStyle />
        </div>
    );
}

export default App;
