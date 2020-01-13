import React from 'react';

import OrderList from '../../common/OrderList/OrderList.jsx';
import MenuSelector from '../../common/MenuSelector/MenuSelector.jsx';
import {
    OrderWrapper,
    MenuButtonWrapper,
    MenuButton,
    OrderListWrapper,
} from './Order.js';

/*
* 粒度分析
* 一级：Order页面组件
* 二级：@TODO MenuButtonWrapper -> MenuButton
*       @TODO OrderListWrapper -> OrderItem
* */

const Order = function (){
    console.log('Order组件渲染了！');

    return (
        <OrderWrapper>

            <MenuButtonWrapper>
                <MenuButton />
            </MenuButtonWrapper>

            <OrderListWrapper>
                <OrderList />
            </OrderListWrapper>


            <MenuSelector />

        </OrderWrapper>
    )
};


export default Order;