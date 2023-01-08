import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const BooksApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'api',
    }),

    endpoints(builder){
        return {
            fetchBooks: builder.query<IBook[], string|void>({
                query(limit=''){
                    return `/books?filter=${limit}`;
                },
            }),
        };
    },
});

interface IBook {
    id: number
    title: string
    brief: string
    author: string
}

export const { useFetchBooksQuery } = BooksApi