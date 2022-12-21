import Nav from "./components/Nav"
import Home from './pages/Home';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <main>
      <h1>Here is my nav</h1>
        <Nav />
        <Routes>
          <Route path="*" element={<Home />} />
          
        </Routes>
    </main>
  );
}

export default App;
