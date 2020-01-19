import React from 'react';
import {Link} from 'react-router-dom';

import {
    HeaderWrapper,
    Title,
    SubTitle
} from './index.js';


const Header = function (props) {
    console.log('Header组件渲染了！');

    const {
        logo
    } = props;

    return (
        <HeaderWrapper>
            <Link to='/'>
                <img className='logo' src={logo} alt=''/>
            </Link>

            <Title>够嗨美食城</Title>

            <SubTitle>· 外卖</SubTitle>

        </HeaderWrapper>
    )
};

Header.propTypes = {};

export default Header;