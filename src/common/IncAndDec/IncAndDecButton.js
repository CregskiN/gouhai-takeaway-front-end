import styled from 'styled-components';

const IncAndDecButtonWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
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
    IncAndDecButtonWrapper
}