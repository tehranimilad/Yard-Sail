import { Routes, Route } from "react-router-dom";
import { getAllProducts } from "../../utils/api";

import LogIn from "../LogIn";
import SignUp from "../SignUp"
import NewProduct from "../NewProduct"
import EditProduct from "../EditProduct"
import { useEffect, useState } from "react";


const Home = () => {
    const [isLoggedIn, setLogInStatus] = useState(false)

    useEffect(() => {
      if (localStorage.token) {
        setLogInStatus(true)
      }
      const productData = getAllProducts()
      console.log(productData)
    },[])



    return (
      <main>
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
