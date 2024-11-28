import { Link } from "react-router-dom";

function Home({ todos, deleteTodos }) {
  console.log(todos);
  return (
    <div className="mx-auto my-10 grid max-w-5xl">
      <ul className="grid grid-cols-3 gap-5">
        {todos.map((todo) => {
          return (
            <li key={todo.id} className="card w-full bg-neutral">
              <div className="card-body">
                <h2 className="card-title">{todo.title}</h2>
                <p>
                  {todo.description
                    ? todo.description.slice(0, 5)
                    : "No description"}
                </p>
                <div className="card-actions justify-end">
                  <Link to="" className="btn btn-primary btn-sm">
                    editing
                  </Link>
                  <button
                    onClick={() => deleteTodos(todo.id)}
                    className="btn btn-ghost btn-sm"
                  >
                    Delete
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
