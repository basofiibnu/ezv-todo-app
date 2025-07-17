# EZV Frontend Developer Technical Test

This is a submission for the technical test provided by **PT. EZV Service Indonesia**.

## 💡 Tech Stack

- [Next.js 15 (App Router)](https://nextjs.org)
- [Redux Toolkit + RTK Query](https://redux-toolkit.js.org/rtk-query/overview)
- [Tailwind CSS](https://tailwindcss.com/)
- TypeScript

---

## 🚀 Features Implemented

### 1. ✅ Todo List Page
- Fetched from `https://jsonplaceholder.typicode.com/todos`
- Paginated with 10 todos per page using `_start` and `_limit`

### 2. ✅ Create Todo Form
- Form to POST a new todo to the endpoint
- Optimistic UI update since JSONPlaceholder doesn't persist data

### 3. ✅ Server-Side Rendering (SSR)
- `/`: rendered using `fetch()` with `dynamic = "force-dynamic"`

### 4. ✅ Incremental Static Regeneration (ISR)
- `/isr`: statically generated and revalidated every 10 seconds
- Data also revalidated on client using RTK Query

### 5. ✅ Type Definitions
- `Todo` response type created in `store/services/todos.ts`

---

## 📂 Folder Structure

- `src/app`: App router pages using SSR/ISR
- `src/components`: UI components
- `src/store`: Redux Toolkit setup with RTK Query
- `src/services`: API controls and configuration
- `src/lib`: Server fetch utils

---


## 🧠 Approach & Notes

- RTK Query handles all API state logic (loading, error, caching, etc.)
- For SSR, data is fetched in `getServerSideProps` equivalent (`dynamic = "force-dynamic"`)
- For ISR, `revalidate = 10` is used, and `useGetTodosQuery()` refetches on mount
- Since JSONPlaceholder doesn’t store POST data, I used optimistic update in Redux cache to show it immediately

---

## 📦 Getting Started

```bash
git clone https://github.com/YOUR_USERNAME/ezv-frontend-test.git
cd ezv-frontend-test
yarn install
yarn dev
