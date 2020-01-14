import React from 'react';
import {connect} from 'react-redux';

import OrderItems from "./components/OrderList.jsx";
import ShoppingCart from './components/ShoppingCart.jsx'
import {
    OrderWrapper,
    MenuButtonWrapper,
    OrderListWrapper,
    ShoppingCartWrapper,
} from './Order.js';

/*
* 粒度分析
* 一级：Order页面组件
* 二级：@TODO MenuButtonWrapper -> MenuButton
*       @TODO OrderListWrapper -> OrderItem
* */

const Order = function () {
    console.log('Order页渲染了！');

    const orderItems = [
        {
            id: 0,
            name: '鱼香肉丝',
            description: '好吃不贵',
            imgUrl: 'http://hxsmallgame.cn/caidanimg/luroufan.jpg',
            amount: 12,
            current_price: 15,
            original_price: 20,
        },
        {
            id: 1,
            name: '鱼香肉丝',
            description: '好吃不贵',
            imgUrl: 'http://hxsmallgame.cn/caidanimg/luroufan.jpg',
            amount: 123,
            current_price: 15,
            original_price: 20,
        },
        {
            id: 2,
            name: '鱼香肉丝',
            description: '好吃不贵',
            imgUrl: 'http://hxsmallgame.cn/caidanimg/luroufan.jpg',
            amount: 0,
            current_price: 15,
            original_price: 20,
        },
        {
            id: 3,
            name: '鱼香肉丝',
            description: '好吃不贵',
            imgUrl: 'http://hxsmallgame.cn/caidanimg/luroufan.jpg',
            amount: 0,
            current_price: 15,
            original_price: 20,
        },
        {
            id: 3,
            name: '鱼香肉丝',
            description: '好吃不贵',
            imgUrl: 'http://hxsmallgame.cn/caidanimg/luroufan.jpg',
            amount: 0,
            current_price: 15,
            original_price: 20,
        },
        {
            id: 3,
            name: '鱼香肉丝',
            description: '好吃不贵',
            imgUrl: 'http://hxsmallgame.cn/caidanimg/luroufan.jpg',
            amount: 0,
            current_price: 15,
            original_price: 20,
        },
        {
            id: 3,
            name: '鱼香肉丝',
            description: '好吃不贵',
            imgUrl: 'http://hxsmallgame.cn/caidanimg/luroufan.jpg',
            amount: 0,
            current_price: 15,
            original_price: 20,
        },
        {
            id: 3,
            name: '鱼香肉丝',
            description: '好吃不贵',
            imgUrl: 'http://hxsmallgame.cn/caidanimg/luroufan.jpg',
            amount: 0,
            current_price: 15,
            original_price: 20,
        },
        {
            id: 3,
            name: '鱼香肉丝',
            description: '好吃不贵',
            imgUrl: 'http://hxsmallgame.cn/caidanimg/luroufan.jpg',
            amount: 0,
            current_price: 15,
            original_price: 20,
        },
        {
            id: 3,
            name: '鱼香肉丝',
            description: '好吃不贵',
            imgUrl: 'http://hxsmallgame.cn/caidanimg/luroufan.jpg',
            amount: 0,
            current_price: 15,
            original_price: 20,
        },
        {
            id: 3,
            name: '鱼香肉丝',
            description: '好吃不贵',
            imgUrl: 'http://hxsmallgame.cn/caidanimg/luroufan.jpg',
            amount: 0,
            current_price: 15,
            original_price: 20,
        },
        {
            id: 3,
            name: '鱼香肉丝',
            description: '好吃不贵',
            imgUrl: 'http://hxsmallgame.cn/caidanimg/luroufan.jpg',
            amount: 0,
            current_price: 15,
            original_price: 20,
        }
    ];

    return (
        <OrderWrapper>

            {/* 菜单按钮 */}
            <MenuButtonWrapper>
                <i className='iconfont ic'>&#xe601;</i>
            </MenuButtonWrapper>

            {/* 设计思想：用户提供Wrapper，组件直接入内 */}

            {/* 点餐列表 */}
            <OrderListWrapper>
                <OrderItems orderItems={orderItems}/>
            </OrderListWrapper>

            {/* 购物车 */}
            <ShoppingCartWrapper>
                <ShoppingCart />
            </ShoppingCartWrapper>

            {/* menu选择器 */}
            {/*<MenuSelector />*/}
        </OrderWrapper>
    )
};


export default Order;