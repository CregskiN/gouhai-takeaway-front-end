import React from 'react';

import OrderItems from "./components/OrderList.jsx";
import ShoppingCart from './components/ShoppingCart.jsx'
import {
    OrderPageWrapper,
    MenuButtonWrapper,
    OrderListWrapper,
    ShoppingCartWrapper,
} from './Order.js';
import fastFoodIcon from '../../static/imgs/fastFoodIcon.png';
import shoppingCartIcon from '../../static/imgs/shoppingCartIcon.png';


/*
* 粒度分析
* 一级：Order页面组件
* 二级：@TODO MenuButtonWrapper -> MenuButton
* */

const Order = function () {
    console.log('Order页渲染了！');



    return (
        <OrderPageWrapper>

            {/* 菜单按钮 */}
            <MenuButtonWrapper>
                <i className='iconfont ic'>&#xe601;</i>
            </MenuButtonWrapper>

            {/* 设计思想：用户提供Wrapper，组件直接入内 */}

            {/* 点餐列表 */}
            <OrderListWrapper>
                <OrderItems/>
            </OrderListWrapper>

            {/* 购物车 */}
            <ShoppingCartWrapper>
                <ShoppingCart fastFoodIcon={fastFoodIcon}
                              shoppingCartIcon={shoppingCartIcon}
                />
            </ShoppingCartWrapper>

            {/* menu选择器 */}
            {/*<MenuSelector />*/}
        </OrderPageWrapper>
    )
};


export default Order;