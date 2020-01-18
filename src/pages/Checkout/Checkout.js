import styled from 'styled-components';

// 页面组件容器
const CheckoutPageWrapper = styled.div`
    width: 100vw;
    height: 91vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;


// 账单组件列表容器
const ChecklistWrapper = styled.div`
    width: 100%;
    height: 50%
`;

// 顾客信息填写
const CustomerInfoWrapper = styled.div`
    width: 90%;
    height: 41%;
    margin: 10px 0 0 0;
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