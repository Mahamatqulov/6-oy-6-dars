import { Link } from "react-router-dom";
import { LuClipboardEdit } from "react-icons/lu";
import { RiDeleteBin2Fill } from "react-icons/ri";
import Modal from "../components/Modal";
import { useState } from "react";

function Home({ todos, deleteTodos, editedTodo }) {
  const [todoId, setTodoId] = useState(null);
  const [todo, setTodo] = useState(null);
  return (
    <div className="mx-auto my-10 grid max-w-5xl">
      <ul className="grid grid-cols-3 gap-5">
        <Modal todo={todo} editedTodo={editedTodo} />
        {todos.map((todo) => {
          return (
            <li key={todo.id} className="card w-full bg-neutral">
              <div className="card-body">
                <h2 className="card-title">{todo.title}</h2>
                <p>
                  {todo.description
                    ? todo.description.slice(0, 50)
                    : "No description"}
                </p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => {
                      setTodoId(todo.id);
                      setTodo(todo);
                      document.getElementById("edit-todo").showModal();
                    }}
                    to=""
                    className="btn btn-outline btn-info btn-sm"
                  >
                    <LuClipboardEdit />
                  </button>
                  <button
                    onClick={() => deleteTodos(todo.id)}
                    className="btn btn-outline btn-info btn-sm"
                  >
                    <RiDeleteBin2Fill />
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Home;
