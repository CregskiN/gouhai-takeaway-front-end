import React, {memo} from 'react';
import PropTypes from 'prop-types';


import {
    OrderListWrapper,
    OrderItemWrapper,
    Img,
    Text,
    Button,
} from './OrderList.js';

// 列表容器
const OrderItems = memo(function (props) {
    console.log('OrderList组件渲染了！');

    const {
        orderItems,
    } = props;

    return (
        <OrderListWrapper>
            {
                orderItems.map((orderItem, index) => {
                    return <OrderItem key={orderItem.id} orderItem={orderItem}/>;
                })
            }
        </OrderListWrapper>
    )
});

OrderItems.propTypes = {
    orderItems: PropTypes.array.isRequired,
};


// 单条餐品
const OrderItem = memo(function (props) {
    const {
        orderItem
    } = props;

    return (
        <OrderItemWrapper>

            <Img className='orderItem_img' src={orderItem.imgUrl} alt={'餐品图imgUrl'}/>

            <Text>
                <div className='orderItem_name'>
                    {orderItem.name}&ensp;
                    <i className='iconfont icon_hot'>&#xe61f;</i>
                </div>
                <div className='orderItem_description'>{orderItem.description}</div>
                <div className='orderItem_price'>
                    <span className='original_price'>原价:￥{orderItem.original_price.toFixed(2)}</span>&ensp;
                    <span>现价:￥{orderItem.current_price.toFixed(2)}</span>
                </div>
            </Text>

            <Button>
                <i className='iconfont icon_dec'>&#xe604;</i>
                <span className='orderItem_amount'>{orderItem.amount}</span>
                <i className='iconfont icon_add'>&#xe605;</i>
            </Button>

        </OrderItemWrapper>
    );
});

OrderItem.propTypes = {
    orderItem: PropTypes.object.isRequired
};


export default OrderItems;