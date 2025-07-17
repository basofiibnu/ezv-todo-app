'use client';

import { useGetTodosQuery, Todo } from '@/services/todos';

import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';

export function TodoList({ initialTodos }: { initialTodos: Todo[] }) {
  const [page, setPage] = useState(0);

  const {
    data: todos = initialTodos,
    isLoading,
    refetch,
  } = useGetTodosQuery({ start: page * 10, limit: 10 });

  return (
    <div>
      {isLoading ? (
        <p className="text-gray-500">
          {' '}
          <ul>
            {Array.from({ length: 10 }).map((_, i) => (
              <li key={i} className="mb-3">
                <Skeleton height={40} width="100%" />
              </li>
            ))}
          </ul>
        </p>
      ) : (
        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="p-4 border rounded shadow-sm flex justify-between items-center hover:bg-gray-50"
            >
              <div className="flex items-center gap-2">
                <span className="text-gray-500">{todo.id}.</span>
                <span className="text-gray-800">{todo.title}</span>
              </div>
              <span
                className={`text-sm px-2 py-1 rounded ${
                  todo.completed
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {todo.completed ? 'Done' : 'Open'}
              </span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6 flex justify-between items-center">
        <button
          onClick={() => setPage((p) => Math.max(0, p - 1))}
          className="text-blue-600 hover:underline"
        >
          ← Prev
        </button>

        <span className="text-sm text-gray-600">Page {page + 1}</span>

        <button
          onClick={() => setPage((p) => p + 1)}
          className="text-blue-600 hover:underline"
        >
          Next →
        </button>
      </div>

      <div className="mt-2 text-right">
        <button
          className="text-xs text-gray-400 hover:text-gray-600"
          onClick={() => refetch()}
        >
          🔄 Refetch
        </button>
      </div>
    </div>
  );
}
