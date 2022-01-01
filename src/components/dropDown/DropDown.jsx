import React from "react";
import { Link } from "react-router-dom";
import { CloseIcon, Container, DropdownMenu, DropdownWrapper, Icon, Item } from "./style";

const Dropdown = ({ isOpen, toggle }) => {
    return (
        <Container isOpen={isOpen} toggle={toggle}>
            <Icon>
                <CloseIcon onClick={toggle} />
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <Item onClick={toggle}>HOME</Item>
                    </Link>
                    <Link to="coins" style={{ textDecoration: "none" }}>
                        <Item onClick={toggle}>COINS</Item>
                    </Link>
                    <Link to="news" style={{ textDecoration: "none" }}>
                        <Item onClick={toggle}>NEWS</Item>
                    </Link>
                </DropdownMenu>
            </DropdownWrapper>
        </Container>
    );
};

export default Dropdown;
