import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
    height: auto;
    min-height: calc(100vh - 100px);
    background-color: #e9ecef;
    padding-top: 100px;
`;

export const Top = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    ${mobile({ padding: "10px" })}
`;

export const ImageContainer = styled.div`
    flex: 1;
    height: 100%;
    width: 100%;
`;

export const Image = styled.img`
    height: 100%;
    width: 60%;
    ${mobile({ width: "100%" })}
`;

export const InfoContainer = styled.div`
    flex: 2;
    display: flex;
    flex-wrap: wrap;
`;

export const Item = styled.div`
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: start;
    ${mobile({ margin: "5px" })}
`;

export const Key = styled.h1`
    color: #00042b;
    /* color: ${props => props.color}; */
    font-size: 20px;
    font-weight: normal;
    ${mobile({ fontSize: "15px" })}
`;

export const Value = styled.div`
    color: #9caaa9;
    /* color: ${props => props.color}; */
    margin-left: 10px;
    text-decoration: ${props => props.type && "underline"};
`;

export const Bottom = styled.div`
    padding: 20px 40px;
    ${mobile({ padding: "10px 20px" })}
`;

export const Title = styled.h2`
    font-size: 45px;
    color: ${props => props.color};
    ${mobile({ fontSize: "25px" })}
`;

export const Desc = styled.div`
    font-size: 19px;
    line-height: 1.8;
    text-align: justify;
    ::first-letter {
        font-size: 25px;
    }

    ${mobile({ fontSize: "15px" })}
`;
