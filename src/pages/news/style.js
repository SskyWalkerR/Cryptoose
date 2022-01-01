import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div``;

export const Title = styled.h1`
    margin: 20px;
    ${mobile({ textAlign: "center", fontSize: "25px" })}
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
    height: 400px;
    margin: 10px;
    padding: 20px;
    background-color: grey;
    /* cursor: pointer; */
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    transition: all 0.3s ease-in;
    &:hover {
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
    ${mobile({ height: "auto" })}
`;

export const Top = styled.div`
    display: flex;
    height: auto;
`;

export const TitleContainer = styled.div`
    flex: 2;
`;

export const NewsTitle = styled.h3`
    font-size: 20px;
    ${mobile({ fontSize: "18px" })}
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
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 50%;
`;

export const Desc = styled.div`
    font-size: 17px;
    ${mobile({ fontSize: "15px" })}
`;

export const SourceButton = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    margin: 15px 0;
    padding: 5px 10px;
    color: #4e5d5c;
    border: 1px solid #4e5d5c;
    border-radius: 5px;
    cursor: pointer;
`;
