import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
    "x-rapidapi-host": "coinranking1.p.rapidapi.com",
    "x-rapidapi-key": "a0dfbc596fmshbd15c325f343adfp12f7cdjsnd1429f8d5398",
};

const cryptoParams = {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
    limit: "100",
    offset: "0",
    orderBy: "24hVolume",
    orderDirection: "desc",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = url => ({ url, headers: cryptoApiHeaders, params: cryptoParams });

export const cryptoApi = createApi({
    reducerPath: "cryptoApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: builder => ({
        getCryptoStats: builder.query({
            query: () => createRequest("/stats"),
        }),
        getCryptoCoins: builder.query({
            query: () => createRequest("/exchange/-zdvbieRdZ/coins"),
        }),
        getCoin: builder.query({
            query: id => createRequest(`/coin/${id}`),
        }),
    }),
});

export const { useGetCryptoStatsQuery, useGetCryptoCoinsQuery, useGetCoinQuery } =
    cryptoApi;
