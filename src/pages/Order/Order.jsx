import React, {useState, useCallback} from 'react';

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
*       @TODO OrderListWrapper -> OrderItem
* */

const Order = function () {
    console.log('Order页渲染了！');

    const [orderItems, setOrderItems] = useState(
        [{
            id: 0,
            name: '鱼香肉丝',
            description: '好吃不贵',
            imgUrl: 'http://hxsmallgame.cn/caidanimg/luroufan.jpg',
            amount: 12,
            current_price: 15,
            original_price: 20,
        }
    ]);

    const total_price = 123;

    console.log(orderItems);

    const add = (Items) => {
        for(let value in Items){
            Items[value].amount ++;
        }
    };

    const handleIncAmount = useCallback((id) => {
         setOrderItems(add())
    },[]);


    return (
        <OrderPageWrapper>

            {/* 菜单按钮 */}
            <MenuButtonWrapper>
                <i className='iconfont ic'>&#xe601;</i>
            </MenuButtonWrapper>

            {/* 设计思想：用户提供Wrapper，组件直接入内 */}

            {/* 点餐列表 */}
            <OrderListWrapper>
                <OrderItems orderItems={orderItems}
                            inc={handleIncAmount}
                            // dec={}

                />
            </OrderListWrapper>

            {/* 购物车 */}
            <ShoppingCartWrapper>
                <ShoppingCart totalPrice={total_price}
                              fastFoodIcon={fastFoodIcon}
                              shoppingCartIcon={shoppingCartIcon}
                />
            </ShoppingCartWrapper>

            {/* menu选择器 */}
            {/*<MenuSelector />*/}
        </OrderPageWrapper>
    )
};


export default Order;