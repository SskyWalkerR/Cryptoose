import styled from "styled-components";

export const Container = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #e9ecef;
`;

export const Wrapper = styled.div`
    width: 100%;
    margin: 10px 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Left = styled.div`
    flex: 1;
`;

export const Logo = styled.h1`
    font-size: 30px;
    color: #006d77;
    cursor: pointer;
    text-transform: uppercase;
`;

export const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`;

export const Item = styled.a`
    padding: 5px 20px;
    margin-left: 40px;
    background-color: #006d77;
    color: #ffffff;
    border-radius: 15px;
    cursor: pointer;
    transition: all 0.3s ease-in;
    &:hover {
        background-color: #ffffff;
        color: #006d77;
    }
`;
