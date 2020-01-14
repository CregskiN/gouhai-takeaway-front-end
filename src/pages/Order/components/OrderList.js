import styled from 'styled-components';

// 餐品列表
const OrderListWrapper = styled.div`
    overflow-y: scroll;
    width: 100%;
    height: 100%;
    padding: 0 10px 0 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

// 单条餐品容器
const OrderItemWrapper = styled.div`
    width:100%;
    height: 20vw;
    margin: 0 0 10px 0;
    box-shadow: #f2f2f2 0 0 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

// 单条餐品 内 img部分
const Img = styled.img`
    width: 26%;
    border-radius: 5px;
`;

// 单条餐品 内 text部分
const Text = styled.div`
    width: 59%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    
    .orderItem_name{
        font-size: 15px;
        
        .icon_hot {
            color: #d81e06;
        }
    }
    
    .orderItem_description{
        font-size: 13px;
    }

    .orderItem_price {
        width: 100%;
        font-size:13px;
        overflow: hidden;
        
        .original_price {
            text-decoration: line-through;
        }
    } 
`;


// 单条餐品 内 加减按钮部分
const Button = styled.div`
    width: 25%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    
    // +按钮
    .icon_add{
        //font-size: 18px;
        display: block;
    }
    .orderItem_amount{
        display: block;
        background-color: #f2f2f2;
        padding: 1px 5px;
        border-radius: 10%;
    }
    // -按钮
    .icon_dec{
        //font-size: 18px;
        display: block;
    }
    
`;



export {
    OrderListWrapper,
    OrderItemWrapper,
    Img,
    Text,
    Button,
}