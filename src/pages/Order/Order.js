import styled from 'styled-components';

// Order点单页面 容器
const OrderWrapper = styled.div`
    width: 100%;
    height: 91vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

// MenuButton容器
const MenuButtonWrapper = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    .ic {
        color: #0084ff;
    }
`;


// OrderList 餐品列表容器
const OrderListWrapper = styled.div`
    width: 90%;
    height: 86%;
`;

// 购物车
const ShoppingCartWrapper = styled.footer`
    width: 100%;
    height: 9%;
    background-color: #f2f2f2;
`;


export {
    OrderWrapper,
    MenuButtonWrapper,
    OrderListWrapper,
    ShoppingCartWrapper,
}