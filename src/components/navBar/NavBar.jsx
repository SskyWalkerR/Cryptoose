import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Item, Logo, Right, Wrapper, Left, MenuBar } from "./style";

const SideBar = ({ toggle }) => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <Logo>Cryptoos</Logo>
                    </Link>
                </Left>

                <Right>
                    <MenuBar onClick={toggle} />
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <Item>HOME</Item>
                    </Link>
                    <Link to="/coins" style={{ textDecoration: "none" }}>
                        <Item>COINS</Item>
                    </Link>
                    <Link to="/news" style={{ textDecoration: "none" }}>
                        <Item>NEWS</Item>
                    </Link>
                    {/* <Link to="/about" style={{ textDecoration: "none" }}>
                        <Item>ABOUT</Item>
                    </Link> */}
                </Right>
            </Wrapper>
        </Container>
    );
};

export default SideBar;
