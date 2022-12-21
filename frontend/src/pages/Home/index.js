import { Routes, Route } from "react-router-dom";


import LogIn from "../LogIn";
import SignUp from "../SignUp"
import NewProduct from "../NewProduct"
import EditProduct from "../EditProduct"


const Home = () => {
    return (
      <main>
        
        <h1>Home</h1>
        <p>This is the Home page.</p>
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/newproduct" element={<NewProduct />} />
          <Route path="/editproduct" element={<EditProduct />} />

        </Routes>
      </main>
    );
}

export default Home;
