
import './App.css';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbarnya } from './Komponen/Navbarnya';
import { Home } from './Halaman/Home';
import { BukuKontak } from './Halaman/Kontak';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbarnya/>
      <Routes>
        <Route path="/" element={<Home/>} />
        
        <Route path="/BukuKontak" element={<BukuKontak/>} />
        
        
        
      </Routes>
     
      {/* <Home/> */}
      
    </div>
    </BrowserRouter>
  );
}

export default App;
