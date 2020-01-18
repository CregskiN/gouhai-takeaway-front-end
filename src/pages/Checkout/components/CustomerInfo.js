import styled from 'styled-components';

const CustomerInfoWrapper = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    Input {
        font-size: 16px;
        height: 27px;
        padding: 0.5px 4px 0.5px 30px;
        margin:  0 0 5px 0;
        border: solid 1px #acacac;
        border-radius: 5px;
    }
    
    .left,.right{
        position: relative;
        
        .iconfont {
            position: absolute;
            left: 5px;
            top: 5px;
            font-size: 20px;
        }
    }
`;


export {
    CustomerInfoWrapper
};