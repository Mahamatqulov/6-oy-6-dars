import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Create from "./pages/Create";
import Home from "./pages/Home";

const getTodosFormLocalStorage = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

function App() {
  const [todos, setTodos] = useState(getTodosFormLocalStorage());

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const deleteTodos = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const editedTodo = (t) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id == todo.id) {
          return { ...t };
        } else {
          return todo;
        }
      });
    });
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: (
            <Home
              todos={todos}
              deleteTodos={deleteTodos}
              editedTodo={editedTodo}
            />
          ),
        },
        {
          path: "/create",
          element: <Create setTodos={setTodos} />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
