import React, {memo} from 'react';
import PropTypes from 'prop-types';

import {
    ChecklistWrapper,
    MiddleLine,
    ListHeader,
    ListItemsWrapper,
    ListItem as Item
} from './Checklist.js'

import IncAndDecButton from "../../../common/IncAndDec/IncAndDecButton.jsx";


// item
const ListItem = memo(function (props) {
    const {
        name,
        amount,
        summary,
        inc
    } = props;

    return (
        <Item>
            <div className='item_name'>
                <div>{name}</div>
            </div>
            <div className='item_summary'>￥{summary.toFixed(2)}</div>
            <div className='item_amount'>
                <IncAndDecButton amount={amount} inc={inc}/>
            </div>
        </Item>
    )
});


// items
const ListItems = memo(function (props) {
    const {
        items,
        inc
    } = props;

    return (
        items.map((item) => {
            return <ListItem className='ListItem_item' name={item.name} amount={item.amount} summary={item.summary} key={item.id} inc={inc}/>
        })
    )
});

ListItems.prototype = {
    items: PropTypes.object.isRequired
};


// 列表 = 头部 + items
const Checklist = memo(function (props) {
    console.log('CheckoutList组件渲染了！');

    const {
        checklist,
        inc
    } = props;

    return (
        <ChecklistWrapper>
            <ListHeader>
                <div className='header_name'>菜品</div>
                <MiddleLine/>
                <div className='header_summary'>价格</div>
                <MiddleLine/>
                <div className='header_amount'>份数</div>
            </ListHeader>

            <ListItemsWrapper>
                <ListItems items={checklist} inc={inc}/>
            </ListItemsWrapper>
        </ChecklistWrapper>
    )
});

Checklist.propTypes = {
    checklist: PropTypes.array.isRequired
};

export default Checklist;