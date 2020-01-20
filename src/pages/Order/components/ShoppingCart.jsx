import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {
    ShoppingCartWrapper,
    Left,
    MiddleLine,
    Right
} from './ShoppingCart.js'
import {useSelector} from "react-redux";

const ShoppingCart = memo(function (props) {
    console.log('ShoppingCart 组件渲染了！');

    const {
        fastFoodIcon,
        shoppingCartIcon,
    } = props;

    const totalPrice = useSelector((state) => {
        return state.order.getIn(['totalPrice']);
    });

    return (
        <ShoppingCartWrapper>
            <Left>
                <img className='left_fastFoodIcon' src={fastFoodIcon} alt='fastFoodIcon.png'/>
                <div className='left_totalPrice'>￥{totalPrice.toFixed(2)}</div>
            </Left>

            <MiddleLine/>

            <Right>
                <Link className='right_link' to='/checkout'>
                    <img className='right_shoppingCartIcon' src={shoppingCartIcon} alt='shoppingCartIcon.png'/>
                    <div className='right_checkout'>选好了<br/>checkout></div>
                </Link>
            </Right>
        </ShoppingCartWrapper>
    )
});

ShoppingCart.propTypes = {
    fastFoodIcon: PropTypes.string.isRequired,
    shoppingCartIcon: PropTypes.string.isRequired,

};

export default ShoppingCart;