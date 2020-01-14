import styled from 'styled-components';

// checklist 容器
const ChecklistWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

// 中间割线
const MiddleLine = styled.div`
    width: 0.5%;
    height: 80%;
    background-color: #f2f2f2;
`;

// 列表头部
const ListHeader = styled.header`
    width: 90%;
    height: 5vh;
    margin: 10px 0 0 0;
    box-shadow: #f2f2f2 0 0 10px; 
    border-radius: 5%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    
    .header_name{
        width: 32.5%;
    }
    
    .header_summary{
        width: 32.5%;
    }
    
    .header_amount{
        width: 35%;
    }
`;


// 列表内容
const ListItemsWrapper = styled.div`
    width: 90%;
    height: 80%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

// 单条内容
const ListItem = styled.div`
    width: 100%;
    height: 8vh;
    margin: 0 0 5px 0;
    box-shadow: #f2f2f2 0 0 10px; 
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    
    .item_name{
        width: 32.5%;
    }
    
    .item_summary{
        width: 32.5%;
    }
    
    .item_amount{
        width: 35%;
    }
`;

export {
    ChecklistWrapper,
    MiddleLine,
    ListHeader,
    ListItemsWrapper,
    ListItem,
}