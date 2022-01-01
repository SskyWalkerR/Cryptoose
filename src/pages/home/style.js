import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
    height: calc(100vh);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    ${mobile({ height: "auto" })}
`;

export const Heading = styled.h1`
    font-size: 40px;
    text-transform: uppercase;
    color: #006d77;
    ${mobile({ fontSize: "25px", marginTop: "10px" })}
`;

export const Wrapper = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 100px;
    margin-top: 50px;
    ${mobile({
        flexDirection: "column",
        height: "auto",
        justifyContent: "center",
        alignItems: "flex-start",
        marginTop: "20px",
        padding: "0 50px",
    })}
`;

export const Left = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
`;

export const Item = styled.div`
    text-align: left;
    /* display: flex;
    justify-content: center;
    align-items: center; */
    margin: 30px 0;
    ${mobile({ margin: "20px 0" })}
`;

export const Title = styled.div`
    font-size: 30px;
    text-transform: capitalize;
    color: #006d77;
    ${mobile({ fontSize: "20px" })}
`;

export const Value = styled.div`
    font-size: 25px;
    color: #83c5be;
    ${mobile({ fontSize: "20px" })}
`;

export const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
