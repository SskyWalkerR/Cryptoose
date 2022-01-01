import React from "react";
import { Bottom, Card, Container, Title, Top, Wrapper, Rank, Icon, Item } from "./style";
import { useGetCryptoCoinsQuery } from "../../services/cryptoApi";
import millify from "millify";
import { Link } from "react-router-dom";

const Coins = () => {
    const { data, isFetching, isError } = useGetCryptoCoinsQuery();
    const coinExchange = data?.data?.coins;

    if (isFetching) return "Loading...";
    if (!coinExchange) return "Something Went Wrong..";
    if (isError) return "Error..";

    return (
        <Container>
            <Title>Top Crypto Currencies</Title>
            <Wrapper>
                {coinExchange?.map(coin => {
                    return (
                        <Link
                            to={`${coin?.uuid}`}
                            style={{ textDecoration: "none", color: "inherit" }}
                            state={{ id: coin?.uuid }}
                        >
                            <Card>
                                <Top>
                                    <Rank>
                                        {coin?.rank}. {coin?.name}
                                    </Rank>
                                    <Icon src={coin?.iconUrl} />
                                </Top>
                                <Bottom>
                                    <Item>
                                        Price: {millify(coin?.price, { precision: 5 })}
                                    </Item>
                                    <Item>Symbol: {coin?.symbol}</Item>
                                    <Item>
                                        Number of Markets: {coin?.numberOfMarkets}
                                    </Item>
                                </Bottom>
                            </Card>
                        </Link>
                    );
                })}
            </Wrapper>
        </Container>
    );
};

export default Coins;
