import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiUrl = import.meta.env.VITE_API_URL;

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  endpoints: () => ({})
});
