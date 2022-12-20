import Nav from './components/Nav';
import Home from './pages/Home';
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import NewProduct from "./pages/NewProduct";
import EditProduct from "./pages/EditProduct";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <main>
      <h1>Here is my nav</h1>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/newproduct" element={<NewProduct />} />
          <Route path="/editproduct" element={<EditProduct />} />
        </Routes>
    </main>
  );
}

export default App;
