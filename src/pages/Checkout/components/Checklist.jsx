import React from 'react';
import PropTypes from 'prop-types';

import {
    ChecklistWrapper,
    MiddleLine,
    ListHeader,
    ListItemsWrapper,
    ListItem as Item
} from './Checklist.js'


// item
const ListItem = (props) => {
    const {
        name,
        amount,
        summary
    } = props.item;

    return (
        <Item>
            <div className='item_name'><div>{name}</div></div>
            <div className='item_summary'>￥{summary.toFixed(2)}</div>
            <div className='item_amount'>{amount}</div>
        </Item>
    )
};


// items
const ListItems = function (props) {
    const {
        items
    } = props;

    return (
        items.map((item, index) => {
            return <ListItem className='ListItem_item' item={item} key={item.id}/>
        })
    )
};

ListItems.prototype = {
    items: PropTypes.object.isRequired
};


// 列表 = 头部 + items
const Checklist = function (props) {
    console.log('CheckoutList组件渲染了！');

    const {
        checklist
    } = props;

    return (
        <ChecklistWrapper>
            <ListHeader>
                <div className='header_name'>菜品</div>
                <MiddleLine />
                <div className='header_summary'>价格</div>
                <MiddleLine />
                <div className='header_amount'>份数</div>
            </ListHeader>

            <ListItemsWrapper>
                <ListItems items={checklist}/>
            </ListItemsWrapper>
        </ChecklistWrapper>
    )
};

Checklist.propTypes = {
    checklist: PropTypes.array.isRequired
};

export default Checklist;