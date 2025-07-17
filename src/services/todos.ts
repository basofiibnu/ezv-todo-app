import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  tagTypes: ['Todos'],
  endpoints: (builder) => ({
    getTodos: builder.query<Todo[], { start: number; limit: number }>(
      {
        query: ({ start, limit }) =>
          `/todos?_start=${start}&_limit=${limit}`,
        providesTags: ['Todos'],
      }
    ),
    createTodo: builder.mutation<Todo, Partial<Todo>>({
      query: (body) => ({
        url: '/todos',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Todos'],
    }),
  }),
});

export const { useGetTodosQuery, useCreateTodoMutation } = todosApi;
