import React from 'react';
import PropTypes from 'prop-types';

import {
    HeaderWrapper,
    Title,
    SubTitle
} from './index.js';


const Header = function (props){
    console.log('Header组件渲染了！');

    const {
        logo
    } = props;

    return (
        <HeaderWrapper>
            <img className='logo' src={logo} alt=''/>

            <Title>够嗨美食城</Title>
            <SubTitle>· 外卖</SubTitle>
        </HeaderWrapper>
    )
};

Header.propTypes = {

};

export default Header;