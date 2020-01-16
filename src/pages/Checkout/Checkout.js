import styled from 'styled-components';

// 页面组件容器
const CheckoutPageWrapper = styled.div`
    width: 100vw;
    height: 91vh;
`;


// 账单组件列表容器
const ChecklistWrapper = styled.div`
    width: 100%;
    height: 50%
`;

// 顾客信息填写
const CustomerInfoWrapper = styled.div`
    width: 100%;
    height: 41%;
`;

// 底部结算栏
const CheckoutBarWrapper = styled.footer`
    width: 100%;
    height: 9%;
`;


export {
    CheckoutPageWrapper,
    ChecklistWrapper,
    CheckoutBarWrapper,
    CustomerInfoWrapper
}