import Nav from './components/Nav';
import Home from './pages/Home';
import LogIn from './pages/LogIn'
import SignUp from "./pages/SignUp"
import NewProduct from "./pages/NewProduct"
import EditProduct from "./pages/EditProduct"
import AccountPage from "./pages/AccountPage";
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUserAccount } from './utils/api';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    if (localStorage.token) {
      setIsLoggedIn(true)
      getUserAccount(localStorage.userId)
       .then(data => console.log("Welcome " + data.username))
    }
  }, [])

  return (
    <main>
      
        <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={<Home/>} />
          
          <Route path="/login" element={<LogIn setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/newproduct" element={<NewProduct/>} />
          <Route path="/editproduct" element={<EditProduct />} />
          <Route path="/account" element={<AccountPage/>} />
        </Routes>
        
    </main>
  );
}

export default App;
