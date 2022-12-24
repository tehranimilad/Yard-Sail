import { Link } from "react-router-dom";
import { Image } from "react-bootstrap"

function Nav(props) {
  
  
    
  const handleLogOut = () => {
      localStorage.clear()
      props.setIsLoggedIn(false)
    }

  return (
    <>
        {props.isLoggedIn ? 
        <nav className="navbar mavbar-expand-lg navbar-light bg-light">
              <div className="navbar-header">
              <Image src="https://i.postimg.cc/wvXyPfjH/sailboat.png" width="25%" fluid />
              <a className="navbar-brand" href="/">Yard Sail</a>
              </div>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/newproduct" className="nav-link">Post New</Link>
            <Link to="/account" className="nav-link">Account</Link>
            <Link onClick={handleLogOut} className="nav-link">LogOut</Link>
          
        </nav>
        : 
        <nav className="navbar mavbar-expand-lg navbar-light bg-light">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/signup" className="nav-link">Sign Up</Link>
        </nav>
        }
      
    </>
  );
}

export default Nav;
