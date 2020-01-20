import {fromJS} from 'immutable';

const defaultState = fromJS({

    orderItems: [{
        id: 0,
        name: '鱼香肉丝',
        description: '好吃不贵',
        imgUrl: 'http://hxsmallgame.cn/caidanimg/luroufan.jpg',
        amount: 12,
        current_price: 15,
        original_price: 20,
    }],// 点餐菜单
    totalPrice: 123, // 已选商品总价




});

export default (state = defaultState, action) => {
    switch (action.type) {

        case 'inc':
            const newState = state.toJS();
            newState.orderItems[0].amount ++;


            return fromJS(newState);

        default:
            return state;
    }
};