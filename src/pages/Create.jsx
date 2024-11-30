import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

function Create({ setTodos }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    console.log("s");

    e.preventDefault();
    if (!title.trim()) {
      toast.info("nimadir yozing axir");
      return;
    } else if (!description.trim()) {
      toast.error("Iltimos to'liq malumot bering");
      return;
    }
    setTodos((prev) => {
      return [
        ...prev,
        {
          id: Math.random(),
          title,
          description,
        },
      ];
    });
    navigate("/");
  };

  return (
    <div className="mx-auto my-10 w-96">
      <h2 className="mb-5 text-center text-3xl font-medium">Add New Todo</h2>
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
        <button type="submit" className="btn btn-circle btn-block">
          Add
        </button>
      </form>
    </div>
  );
}

export default Create;
