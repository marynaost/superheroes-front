// import { createReducer } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const heroApi = createApi({
  reducerPath: 'heroes',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://super-heroes-nuvem.herokuapp.com/api',
  }),
  tagTypes: ['Hero'],
  endpoints: builder => ({
    fetchHeroes: builder.query({
      query: (page = 1) => `/heroes?page=${page}`,
      providesTags: ['Hero'],
      keepUnusedDataFor: 5,
    }),
    findHero: builder.query({
      query: heroId => ({
        url: `/heroes/${heroId}`,
        providesTags: ['Hero'],
        keepUnusedDataFor: 5,
      }),
    }),
    deleteHero: builder.mutation({
      query: heroId => ({
        url: `/heroes/${heroId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Hero'],
    }),
    addHero: builder.mutation({
      query: newHero => ({
        url: '/heroes',
        method: 'POST',
        body: newHero,
      }),
      invalidatesTags: ['Hero'],
    }),
    updateHero: builder.mutation({
      query: ({ heroId, ...fields }) => ({
        url: `/heroes/${heroId}`,
        method: 'PATCH',
        body: fields,
      }),
      invalidatesTags: ['Hero'],
    }),
  }),
})

export const {
  useFetchHeroesQuery,
  useFindHeroQuery,
  useDeleteHeroMutation,
  useAddHeroMutation,
  useUpdateHeroMutation,
} = heroApi
