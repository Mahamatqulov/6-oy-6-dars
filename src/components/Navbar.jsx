import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-base-200">
      <div className="navbar mx-auto max-w-6xl">
        <div className="navbar-start">
          <Link className="btn btn-secondary text-2xl font-bold" to="/">
            TODOS
          </Link>
        </div>
        <div className="navbar-center"></div>
        <div className="navbar-end">
          <Link className="link link-primary" to="/create">
            Create
          </Link>
        </div>
      </div>
    </header>
  );
}
export default Navbar;
