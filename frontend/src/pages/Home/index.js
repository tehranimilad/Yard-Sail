import { Routes, Route } from "react-router-dom";
import { getAllProducts } from "../../utils/api";

import LogIn from "../LogIn";
import SignUp from "../SignUp"
import NewProduct from "../NewProduct"
import EditProduct from "../EditProduct"
import { useEffect, useState } from "react";
import AccountPage from "../AccountPage";
import ProductCard from "../../components/ProductCard";


const Home = () => {
    const [isLoggedIn, setLogInStatus] = useState(false)
    const [productList, setProductList] = useState([])
    const [showProducts, setShowProducts] = useState(true)
    

    useEffect(() => {
      if (localStorage.token) {
        setLogInStatus(true)
      }
      getAllProducts()
        .then(data => setProductList(data))
        .catch(err => alert("Could not load products"))
      setShowProducts(true)
      },[])

    

    return (
      <main>
        <Routes>
          <Route path="/login" element={<LogIn setShowProducts={setShowProducts} />} />
          <Route path="/signup" element={<SignUp setShowProducts={setShowProducts}/>} />
          <Route path="/newproduct" element={<NewProduct setShowProducts={setShowProducts}/>} />
          <Route path="/editproduct" element={<EditProduct />} />
          <Route path="/account" element={<AccountPage setShowProducts={setShowProducts}/>} />
        </Routes>
        <div className="row">
          {productList.map((product, i) => {
            return(
              <>
              {
                showProducts ?
              
              <ProductCard product={product} key={i} />
            
            :null}
              </>
            )
          })}
        </div>
      </main>
    );
}

export default Home;
