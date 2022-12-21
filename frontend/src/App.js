import Nav from './components/Nav';
import Home from './pages/Home';
import LogIn from './pages/LogIn'
import SignUp from "./pages/SignUp"
import NewProduct from "./pages/NewProduct"
import EditProduct from "./pages/EditProduct"
import AccountPage from "./pages/AccountPage";
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { getToken } from './utils/api';


function App() {

  const [user, setUser] = useState({})
  getToken().then(data => {setUser(data)})
    

    
   
  return (
    <main>
      <h1>Here is my nav</h1>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>} />
          
          <Route path="/login" element={<LogIn/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/newproduct" element={<NewProduct/>} />
          <Route path="/editproduct" element={<EditProduct />} />
          <Route path="/account" element={<AccountPage user={user}/>} />
        </Routes>
        
    </main>
  );
}

export default App;
