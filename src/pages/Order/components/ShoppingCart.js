import styled from "styled-components";

// ShoppingCart组件内容器
const ShoppingCartWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: #f2f2f2;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

// 左部分
const Left = styled.div`
    width: 77%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    
    .left_fastFoodIcon {
        width: 12vw;
        height: 12vw;
        padding: 0 0 0 15px;
    }
    
    .left_totalPrice {
        display: block;
        width: 30%;
        height: 20px;
        padding: 0 10px 0 20px;
        font-size: 20px;
    }
`;

// 中间割线
const MiddleLine = styled.div`
    width: 0.5%;
    height: 100%;
    background-color: white;
`;

// 右部分
const Right = styled.div`
    width: 22.5vw;
    height: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    .right_shoppingCartIcon {
        width: 7vw;
        height: 7vw;
    }
    
    .right_checkout {
        font-size: 12px;
        color: #1890ff;
        text-decoration: none !important;
        border: none;
    }
`;

export {
    ShoppingCartWrapper,
    Left,
    MiddleLine,
    Right
}