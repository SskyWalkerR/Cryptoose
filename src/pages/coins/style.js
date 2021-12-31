import styled from "styled-components";

export const Container = styled.div`
    height: calc(100vh - 100);
    width: 100%;
    background-color: #e9ecef;
`;

export const Title = styled.h1`
    margin-left: 60px;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 40px;
`;

export const Card = styled.div`
    height: 200px;
    width: 300px;
    margin: 10px;
    cursor: pointer;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    transition: all 0.3s ease-in;
    &:hover {
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
`;

export const Top = styled.div`
    height: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
    border-bottom: 1px solid black;
`;

export const Rank = styled.h4``;

export const Icon = styled.img`
    height: 100%;
    width: 40px;
    padding: 5px 0;
`;

export const Bottom = styled.div`
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const Item = styled.div`
    margin: 10px;
`;
