import { TodoForm } from '@/components/TodosForm';
import { TodoList } from '@/components/TodosList';
import { fetchTodosSSR } from '@/lib/fetchTodos';

export const revalidate = 10;

export default async function TodosISRPage() {
  const todos = await fetchTodosSSR(0, 10);

  return (
    <main className="max-w-2xl mx-auto p-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold mb-4">Todo List (ISR)</h1>
        <p className="text-sm text-gray-500">
          Built with Next.js 15 + RTK Query
        </p>
      </header>

      <TodoForm />
      <TodoList initialTodos={todos} />
    </main>
  );
}
