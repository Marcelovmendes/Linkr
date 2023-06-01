import styled from "styled-components";

export const MainComponentStyle = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #151515;
`;

export const FormStyle = styled.form`
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 36.71%;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        background-color: #333333;

        a {
            font-family: 'Lato';
            font-size: 20px;
            font-weight: 400;
            margin-top: 14px;
            color: #FFFFFF;
            text-align: center;
            margin-left: 60px;
        }
`;


export const Input = styled.input`
    margin-bottom: 13px;
    height: 65px;
    width: 429px;
    border-radius: 6px;
    border: 0;
    box-sizing: border-box;
    padding-left: 17px;
    margin-left: 52px;
    ::placeholder{
        opacity: 1;
        color: #9F9F9F;
        font-family: 'Oswald';
        font-size: 27px;
        font-weight: 700;
        text-align: left;

    }
`;

export const Button = styled.input`
        font-family: 'Oswald';
        font-size: 27px;
        font-weight: 700;
        text-align: center;
        color: #ffff;
        margin-left: 52px;
        
        border: 0;
        height: 65px;
        width: 429px;
        border-radius: 6px;
        background-color: #1877F2;
        cursor: pointer;

`;