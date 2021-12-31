import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
    Bottom,
    Container,
    Desc,
    Image,
    InfoContainer,
    Top,
    ImageContainer,
    Item,
    Key,
    Value,
    Title,
} from "./style";
import { useGetCoinQuery } from "../../services/cryptoApi";
import millify from "millify";

const Coin = () => {
    const location = useLocation();
    const { id } = location.state;
    const { data, isFetching, isError } = useGetCoinQuery(id);
    const coin = data?.data?.coin;

    if (isFetching) return "Loading...";

    if (!coin) return "Something Went Wrong..";

    if (isError) return "Error..";

    return (
        <Container>
            <Top>
                <ImageContainer>
                    <Image src={coin.iconUrl} />
                </ImageContainer>
                <InfoContainer>
                    <Item>
                        <Key color={coin.color}>Rank -</Key>
                        <Value color={coin.color}>{coin.rank}</Value>
                    </Item>
                    <Item>
                        <Key color={coin.color}>Name -</Key>
                        <Value color={coin.color}> {coin.name}</Value>
                    </Item>
                    <Item>
                        <Key color={coin.color}>Symbol -</Key>
                        <Value color={coin.color}>{coin.symbol}</Value>
                    </Item>
                    <Item>
                        <Key color={coin.color}>Price -</Key>
                        <Value color={coin.color}>{millify(coin.price)}</Value>
                    </Item>
                    <Item>
                        <Key color={coin.color}>Market Cap -</Key>
                        <Value color={coin.color}>{millify(coin.marketCap)}</Value>
                    </Item>
                    <Item>
                        <Key color={coin.color}>No.of Exchanges -</Key>
                        <Value color={coin.color}>{coin.numberOfExchanges}</Value>
                    </Item>
                    <Item>
                        <Key color={coin.color}>No.of Market Caps -</Key>
                        <Value color={coin.color}> {coin.numberOfMarkets}</Value>
                    </Item>
                    <Item>
                        <Key color={coin.color}> Official Website -</Key>
                        <Value color={coin.color} type="link">
                            <a
                                style={{ textDecoration: "none", color: "inherit" }}
                                href={coin.websiteUrl}
                            >
                                {coin.websiteUrl ? coin.websiteUrl : <>N/A</>}
                            </a>
                        </Value>
                    </Item>
                </InfoContainer>
            </Top>
            <Bottom>
                <Title color={coin.color}>{coin.name}</Title>
                <Desc color={coin.color}>
                    {coin.description.replace(/<\/?[^>]+(>|$)/g, "")}
                </Desc>
            </Bottom>
        </Container>
    );
};

export default Coin;
