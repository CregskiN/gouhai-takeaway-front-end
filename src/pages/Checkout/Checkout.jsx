import React, {useState, useCallback} from 'react';

import Checklist from "./components/Checklist.jsx";
import CheckoutBar from "./components/CheckoutBar.jsx";
import CustomerInfo from './components/CustomerInfo.jsx'
import {
    CheckoutPageWrapper,
    ChecklistWrapper,
    CheckoutBarWrapper,
    CustomerInfoWrapper
} from "./Checkout.js";

import motorcycleIcon from '../../static/imgs/motorcycleIcon.png';

const Checkout = function () {
    console.log('Checkout页渲染了！');

    const [checklist, setChecklist] = useState([{
        id: 0,
        name: '鱼香肉丝',
        price: 15,
        amount: 10,
        summary: 150,
    }]);

    // 增加
    const addAmount = useCallback(() => {
        setChecklist([
            {
                ...checklist[0],
                amount: checklist[0].amount + 1
            }
        ])
    }, [checklist]);

    const total_price = 100;

    return (
        <CheckoutPageWrapper>

            <ChecklistWrapper>
                <Checklist checklist={checklist} inc={addAmount}/>
            </ChecklistWrapper>

            <CustomerInfoWrapper>
                <CustomerInfo/>
            </CustomerInfoWrapper>

            <CheckoutBarWrapper>
                <CheckoutBar motorcycleIcon={motorcycleIcon} totalPrice={total_price}/>
            </CheckoutBarWrapper>

        </CheckoutPageWrapper>
    )
};

Checkout.propTypes = {};

export default Checkout;