import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3333' }),
  endpoints: (builder) => ({
    sendOrder: builder.mutation({
      query: (body) => ({
        url: '/order/send',
        method: 'POST',
        body,
      }),
    }),
    sendSaleRequest: builder.mutation({
      query: (body) => ({
        url: '/sale/send',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useSendOrderMutation, useSendSaleRequestMutation } = orderApi;