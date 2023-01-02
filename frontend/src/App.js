import Nav from './components/Nav';
import '../src/index.css'
import Home from './pages/Home';
import LogIn from './pages/LogIn'
import SignUp from "./pages/SignUp"
import NewProduct from "./pages/NewProduct"
import AccountPage from "./pages/AccountPage";
import ShowProduct from './pages/ShowProduct';
import ShowProductEdit from './pages/ShowProductEdit';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getToken } from './utils/api';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  
  
  
  useEffect(() => {
    // If local storage token exists then: 
    if (localStorage.token) {
      // Grab the token and the user data associated with the specific token
      getToken().then(data => {setUser(data)})
      // Set the User as Logged In
      setIsLoggedIn(true)
      // Set the loading status to false
      setIsLoading(false)
    } else {
      // If the token doesn't exists, page will load with the original empty current user state.
      setIsLoading(false)
    }
    
  }, [])

  
  return (
    <>
    {isLoading ?
    <div>Loading...</div>
    :
    <main>
      
        <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="product/:id" element={<ShowProduct currentUser={currentUser}/>} />
          <Route path="/productedit/:id" element={<ShowProductEdit />} />
          <Route path="/login" element={<LogIn setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="/newproduct" element={<NewProduct/>} />
          <Route path="/account" element={<AccountPage currentUser={currentUser} setIsLoggedIn={setIsLoggedIn}/>} />
        </Routes>
        
    </main>}
    </>
  );
}

export default App;
