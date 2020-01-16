import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {
    CheckoutBarWrapper,
    Left,
    MiddleLine,
    Right
} from './CheckoutBar.js'

const CheckoutBar = memo(function (props) {
    console.log('CheckoutBar 组件渲染了！');

    const {
        motorcycleIcon,
        totalPrice
    } = props;

    return (
        <CheckoutBarWrapper>
            <Left>
                <img className='left_motorcycleIcon' src={motorcycleIcon} alt='motorcycleIcon.png'/>
                <div className='left_totalPrice'>￥{totalPrice.toFixed(2)}</div>
            </Left>

            <MiddleLine/>

            <Right>
                <Link className='right_link' to='/checkout' >
                    <div className='right_checkout'>结账</div>
                </Link>
            </Right>
        </CheckoutBarWrapper>
    )
});

CheckoutBar.propTypes = {
    motorcycleIcon: PropTypes.string.isRequired,
    totalPrice: PropTypes.number.isRequired
};

export default CheckoutBar;
