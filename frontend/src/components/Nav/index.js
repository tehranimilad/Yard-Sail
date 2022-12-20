import { Link } from "react-router-dom";


function Nav() {
  return (
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/newproduct">Post New</Link>
        <Link to="/editproduct">Edit</Link>
      </nav>
  );
}

export default Nav;
