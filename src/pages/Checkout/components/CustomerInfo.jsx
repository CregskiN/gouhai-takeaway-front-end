import React from 'react';


import {Input} from 'antd';
import {
    CustomerInfoWrapper
} from "./CustomerInfo.js";


const CustomerInfo = function (props) {

    return (
        <CustomerInfoWrapper>

            <div className='left'>
                <i className='iconfont'>&#xe610;</i>
                <Input className='customer_name'
                       type='text'
                       placeholder='收货人姓名'
                />
            </div>

            <div className='right'>
                <i className='iconfont'>&#xe610;</i>
                <Input className='customer_phoneNumber'
                       type='text'
                       maxLength={11}
                       placeholder='收货人手机号'/>
            </div>
        </CustomerInfoWrapper>
    )
};


export default CustomerInfo;