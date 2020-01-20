import React, {memo, useCallback} from 'react';
import PropTypes from 'prop-types';


import {
    OrderListWrapper,
    OrderItemWrapper,
    Img,
    Text,
    IncAndDecButtonWrapper
} from './OrderList.js';

import IncAndDecButton from "../../../common/IncAndDec/IncAndDecButton.jsx";
import {shallowEqual, useDispatch, useSelector} from "react-redux";

// 单条餐品
const OrderItem = memo(function (props) {
    const {
        orderItem,
        inc
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

            <IncAndDecButtonWrapper>
                    <IncAndDecButton inc={inc} amount={orderItem.amount}/>
            </IncAndDecButtonWrapper>

        </OrderItemWrapper>
    );
});

OrderItem.propTypes = {
    orderItem: PropTypes.object.isRequired
};


// 列表容器
const OrderItems = memo(function (props) {
    console.log('OrderList组件渲染了！');

    // useSelector 获取数据
    const orderItemsObj = useSelector((state) => {
        return state.order.getIn(['orderItems']).toJS();
    },shallowEqual);

    // useDispatch 获取redux中dispatch
    const dispatch = useDispatch();

    // action
    const addAmountActionCreator = () => {
        return {
            type: 'inc'
        }
    };

    // 封装： IncAndDecButton 中 inc 函数
    const addAmount = useCallback(() => {
        dispatch(addAmountActionCreator());
    },[dispatch]);

    return (
        <OrderListWrapper>
            {
                orderItemsObj.map((orderItem, index) => {
                    return <OrderItem key={orderItem.id} inc={addAmount} orderItem={orderItem}/>;
                })
            }
        </OrderListWrapper>
    )
});

OrderItems.propTypes = {
    // orderItems: PropTypes.array.isRequired,
};


export default OrderItems;