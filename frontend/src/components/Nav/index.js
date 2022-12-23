import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';



function NavMenu(props) {
  
  
    
  const handleLogOut = () => {
      localStorage.clear()
      props.setIsLoggedIn(false)
    }

  return (
    <>
      
        
        {props.isLoggedIn ? 
        <Navbar bg="light" variant="light" className="flex-column">
        <Container>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/newproduct" className="nav-link">Post</Link>
        <Link to="/account" className="nav-link">Account</Link>
        <Link onClick={handleLogOut}>LogOut</Link>
        </Container>
        </Navbar>
        : 
        <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        </nav>
        }
        
      
    </>
  );
}

export default NavMenu;
