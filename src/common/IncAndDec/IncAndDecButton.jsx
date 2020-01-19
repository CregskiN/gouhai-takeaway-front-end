import React, {memo} from 'react';
import PropTypes from 'prop-types';

import {
    IncAndDecButtonWrapper
} from './IncAndDecButton.js';

const IncAndDecButton = memo(function (props){

    const {
        amount,
        inc
    } = props;

    return (
        <IncAndDecButtonWrapper>
            <i className='iconfont icon_dec'>&#xe604;</i>
            <span className='orderItem_amount'>{amount}</span>
            <i className='iconfont icon_add' onClick={inc}>&#xe605;</i>
        </IncAndDecButtonWrapper>
    )
});

IncAndDecButton.propTypes = {
    amount: PropTypes.number.isRequired
};

export default IncAndDecButton;