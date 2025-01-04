import { Link } from "react-router-dom";
import { ModeToggle } from "../../mode-toggle";

const Navbar = () => {
  return (
    <div className="py-3 px-5  bg-purple-400">
      <div className="max-w-5xl mx-auto flex justify-between">
        <div>
          <Link className="mr-3 text-white" to="/">
            Task
          </Link>
          <Link className="mr-3 text-white" to="/user">
            User
          </Link>
        </div>
        <div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
