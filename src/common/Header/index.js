import styled from "styled-components";



const HeaderWrapper = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 9vh;
    background: #f2f2f2;
    
    .logo {
        width: 8vh;
        height: 8vh;
    }
`;

 const Title = styled.div `
    display: flex;
    flex-direction: column;
    margin-left: 15px;
`;

 const SubTitle = styled.div `
    display: flex;
    flex-direction: column;
    font-weight: bold;
    margin-left: 5px;
`;



export {
    HeaderWrapper,
    Title,
    SubTitle,
}