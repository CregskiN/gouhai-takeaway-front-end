import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

// 全局静态资源部分
import logo from './static/imgs/logo.jpg';
import './App.css';
import {GlobalIconFont} from './static/iconfont/iconfont.js';
import {GlobalStyle} from './static/style.js';

// Page 组件部分
import Header from './common/Header/index.jsx'
import Order from './pages/Order/Order.jsx'
import Checkout from "./pages/Checkout/Checkout.jsx";



function App(props) {

    return (
        <div className='App'>

            <BrowserRouter>
                <Header logo={logo}/>
                <Route path='/' exact component={Order}/>
                <Route path='/checkout' exact component={Checkout}/>
                <GlobalIconFont/>
                <GlobalStyle/>
            </BrowserRouter>


        </div>
    );
}

export default App;
