import React from "react";
import { Container, Heading, Item, Left, Right, Title, Value, Wrapper } from "./style";
import millify from "millify";
import { useGetCryptoStatsQuery } from "../../services/cryptoApi";

const Home = () => {
    const { data, isFetching, isError } = useGetCryptoStatsQuery();
    const globalStats = data?.data;

    if (isFetching) return "Loading...";

    if (isError) return "Error Occured..";

    return (
        <Container>
            <Heading>Global Crypto Stats</Heading>
            <Wrapper>
                <Left>
                    <Item>
                        <Title>Total Coins</Title>
                        <Value>{globalStats.totalCoins}</Value>
                    </Item>
                    <Item>
                        <Title>Total Markets</Title>
                        <Value>{millify(globalStats.totalMarkets)}</Value>
                    </Item>
                    <Item>
                        <Title>Total Exchanges</Title>
                        <Value>{globalStats.totalExchanges}</Value>
                    </Item>
                </Left>

                <Right>
                    <Item>
                        <Title>Total Market Cap</Title>
                        <Value>{millify(globalStats.totalMarketCap)}</Value>
                    </Item>
                    <Item>
                        <Title>Total 24h Volume</Title>
                        <Value>{millify(globalStats.total24hVolume)}</Value>
                    </Item>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Home;
