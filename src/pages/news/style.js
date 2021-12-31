import styled from "styled-components";

export const Container = styled.div``;

export const Title = styled.h1`
    margin: 20px;
`;

export const NewsCardSection = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

export const NewsCard = styled.div`
    min-width: 350px;
    width: 350px;
    height: 350px;
    margin: 10px;
    padding: 20px;
    background-color: grey;
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
    display: flex;
    height: 50%;
`;

export const TitleContainer = styled.div`
    flex: 2;
`;

export const CreatedAt = styled.div``;

export const NewsTitle = styled.h3`
    font-size: 20px;
`;

export const ImageContainer = styled.div`
    flex: 1;
`;

export const Image = styled.img`
    height: 70%;
    width: 100%;
    border-radius: 5px;
`;

export const Bottom = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: auto;
`;

export const Desc = styled.div`
    font-size: 17px;
`;
