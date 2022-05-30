import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productAPI = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.escuelajs.co/api/v1",
  }),
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => "/products",
    }),
  }),
});

export const { useGetProductQuery } = productAPI;
