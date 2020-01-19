// import {fromJS} from 'immutable';

const defaultState = ({
    orderItems: [{
        id: 0,
        name: '鱼香肉丝',
        description: '好吃不贵',
        imgUrl: 'http://hxsmallgame.cn/caidanimg/luroufan.jpg',
        amount: 12,
        current_price: 15,
        original_price: 20,
    }]
});

export default (state = defaultState, action) => {
    switch (action.type) {

        default:
            return state;
    }
};