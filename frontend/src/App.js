import Nav from './components/Nav';
import Home from './pages/Home';
import LogIn from './pages/LogIn'
import SignUp from "./pages/SignUp"
import NewProduct from "./pages/NewProduct"
import EditProduct from "./pages/EditProduct"
import AccountPage from "./pages/AccountPage";
import ShowProduct from './pages/ShowProduct';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getToken } from './utils/api';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState({})
  getToken().then(data => {setUser(data)})
  
  useEffect(() => {
    if (localStorage.token) {
      setIsLoggedIn(true)
    }
  }, [])


  return (
    <main>
      
        <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="product/:id" element={<ShowProduct />} />
          <Route path="/login" element={<LogIn setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="/newproduct" element={<NewProduct/>} />
          <Route path="/editproduct" element={<EditProduct />} />
          <Route path="/account" element={<AccountPage user={user}/>} />
        </Routes>
        
    </main>
  );
}

export default App;
