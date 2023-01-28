import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const Headers = {
  'x-rapidapi-key': '65cd9dee34mshf5520b50b0cf6fbp1dadbajsn3bf8214aa9e9',
  'x-rapidapi-host':'coinranking1.p.rapidapi.com',
};
const baseUrl= 'https://coinranking1.p.rapidapi.com';
const createRequest = (url) => ({ url, headers: Headers });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),

    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),

    
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
    }),

    getExchanges: builder.query({
      query: () => createRequest('/exchanges'),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetExchangesQuery,
} = cryptoApi;
