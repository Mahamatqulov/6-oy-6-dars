import { useEffect, useState } from "react";

function Modal({ todo, editedTodo }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    editedTodo({
      id: todo.id,
      title,
      description,
    });
    document.getElementById("edit-todo").close();
  };

  useEffect(
    (todo) => {
      if (todo) {
        setTitle(todo.title);
        setDescription(todo.description);
      }
    },
    [todo],
  );
  return (
    <>
      <dialog id="edit-todo" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit}>
            <label className="form-control mb-5 w-full">
              <div className="label">
                <span className="label-text">Title:</span>
              </div>
              <input
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
                value={title}
              />
            </label>
            <label className="form-control mb-5 w-full">
              <div className="label">
                <span className="label-text">Description:</span>
              </div>
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                className="textarea textarea-bordered w-full"
                placeholder="Description of todo"
                value={description}
              ></textarea>
            </label>
            <div className="flex justify-end gap-5">
              <button type="submit" className="btn btn-info w-36">
                Submit
              </button>
              <button
                type="button"
                onClick={() => document.getElementById("edit-todo").close()}
                className="btn btn-error w-36"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default Modal;
