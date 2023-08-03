import { api } from "@/redux/api/apiSlice";

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
    }),
    categoryProduct: builder.query({
      query: (category) => `/products/by-category/${category}`,
    }),
  }),
});

export const { useGetProductsQuery, useCategoryProductQuery } = productApi;
