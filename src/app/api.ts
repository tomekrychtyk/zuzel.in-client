import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiUrl = import.meta.env.VITE_API_URL || 'https://speedwayapi.pl/v1';

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  endpoints: () => ({})
});
