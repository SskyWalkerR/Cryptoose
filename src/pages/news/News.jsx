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
    SourceButton,
} from "./style";
import { GrFormNextLink } from "react-icons/gr";

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
    if (isError) return "Error..";
    if (!cryptoNews) return "Something Went Wrong..";

    return (
        <Container>
            <Title>Crypto News</Title>
            <NewsCardSection>
                {cryptoNews?.value.map(news => {
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
                                <SourceButton href={news?.url}>
                                    Source <GrFormNextLink />
                                </SourceButton>
                            </Bottom>
                        </NewsCard>
                    );
                })}
            </NewsCardSection>
        </Container>
    );
};

export default News;
