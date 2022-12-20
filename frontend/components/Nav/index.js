import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NewProduct from "./pages/NewProduct";
import EditProduct from "./pages/EditProduct";
import'./App.css';

function App() {
  return (
    <div>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/newproduct">Post New</Link>
        <Link to="/editproduct">Edit Post</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/newproduct" element={<NewProduct />} />
          <Route path="/editproduct" element={<EditProduct />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
