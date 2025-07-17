import { Todo } from '@/services/todos';

export async function fetchTodosSSR(
  start = 0,
  limit = 10
): Promise<Todo[]> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos?_start=${start}&_limit=${limit}`,
    {
      next: { tags: ['todos'] },
    }
  );
  return res.json();
}
