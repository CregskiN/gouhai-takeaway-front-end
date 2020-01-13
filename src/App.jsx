import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import './App.css';
import Header from './common/Header/index'


function App() {
    return (
        <div className='App'>
            <Header/>

        </div>
    );
}

export default App;
