import {fromJS} from 'immutable';

const defaultState = fromJS({

    orderItems: [{
        id: 0,
        name: '鱼香肉丝',
        description: '好吃不贵',
        imgUrl: 'http://hxsmallgame.cn/caidanimg/luroufan.jpg',
        amount: 12,
        food_id: 0,
        current_price: 15,
        original_price: 20,
    }],// 点餐菜单
    totalPrice: 123, // 已选商品总价
    foodTypeId: 0, // 当前展示菜品种类编号
    foodTypeList: [], // 餐品种类列表

    isMenuSelectorVisible: false, // 菜单选择器是否可见



});

/*
* 需要的action
* 1. 控制menu选择器显隐
* 2. 切换当前显示的typeId
* 3.
* */


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