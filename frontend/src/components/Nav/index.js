import { Link } from "react-router-dom";
import {useState, useEffect} from 'react';


function Nav(props) {
  
  
    
  const handleLogOut = () => {
      localStorage.clear()
      props.setIsLoggedIn(false)
    }

  return (
    <>
      
        
        {props.isLoggedIn ? 
        <nav>
        <Link to="/">Home</Link>
        <Link to="/newproduct">Post New</Link>
        <Link to="/account">Account</Link>
        <Link onClick={handleLogOut}>LogOut</Link>
        </nav>
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

export default Nav;
