import React from "react";
import { useGetCryptoNewsQuery } from "../../services/cryptoNewsApi";
import {
    Container,
    NewsCard,
    NewsCardSection,
    Title,
    Top,
    NewsTitle,
    TitleContainer,
    ImageContainer,
    Image,
    Bottom,
    Desc,
    CreatedAt,
} from "./style";

const News = () => {
    const {
        data: cryptoNews,
        isFetching,
        isError,
    } = useGetCryptoNewsQuery({
        newsCategory: "Cryptocurrency",
        count: 100,
    });

    if (isFetching) return "Loading...";
    if (!cryptoNews) return "Something Went Wrong..";
    if (isError) return "Error..";

    return (
        <Container>
            <Title>Crypto News</Title>
            <NewsCardSection>
                {cryptoNews?.value?.map(news => {
                    return (
                        <NewsCard>
                            <Top>
                                <TitleContainer>
                                    <NewsTitle>{news?.name}</NewsTitle>
                                </TitleContainer>
                                <ImageContainer>
                                    <Image
                                        src={news?.image?.thumbnail?.contentUrl}
                                        alt="Image Not Available"
                                    />
                                </ImageContainer>
                            </Top>
                            <Bottom>
                                <Desc>{news?.description}</Desc>
                            </Bottom>
                        </NewsCard>
                    );
                })}
            </NewsCardSection>
        </Container>
    );
};

export default News;
