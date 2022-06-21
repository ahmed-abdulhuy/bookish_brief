    import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const blogsApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'api',
    }),

    endpoints(builder){
        return {
            fetchBlogs: builder.query<IBlog[], string|void>({
                query(limit=''){
                    return `/blogs?filter=${limit}`;
                },
            }),
        };
    },
});

interface IBlog {
    id: number
    title: string
    brief: string
    author: string
}

export const { useFetchBlogsQuery } = blogsApi