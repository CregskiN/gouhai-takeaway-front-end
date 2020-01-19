import {combineReducers} from "redux";

import { reducer as orderReducer} from '../pages/Order/store/index.js';
import { reducer as checkoutReducer }from '../pages/Checkout/store/index.js';


const reducers = combineReducers({
    order: orderReducer,
    checkout: checkoutReducer,
});

export default reducers;