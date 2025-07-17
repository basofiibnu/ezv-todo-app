'use client';

import { useState } from 'react';
import { useCreateTodoMutation } from '@/services/todos';
import { toast } from 'react-toastify';

export function TodoForm() {
  const [title, setTitle] = useState('');
  const [createTodo, { isLoading }] = useCreateTodoMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return toast.warn('Please enter a title');

    try {
      await createTodo({ title, completed: false, userId: 1 });
      toast.success('Todo added!');
      setTitle('');
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Failed to add todo';
      toast.error(`Failed to add todo: ${errorMessage}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 flex gap-2 items-center"
    >
      <input
        type="text"
        className="flex-1 px-4 py-2 rounded border border-gray-300 shadow-sm focus:outline-none focus:ring focus:border-blue-400"
        placeholder="Enter new todolist..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        disabled={isLoading}
      >
        Add
      </button>
    </form>
  );
}
