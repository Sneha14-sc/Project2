import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import {} from 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Project from './components/Project';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
    <div>
      <NavBar />
      <Routes>
      <Route exact path="/" element={<Home/>} />
      </Routes>
      <Routes>
      <Route  path="/about" element={<About/>} />
      </Routes>
      <Routes>
      <Route path="/project" element={<Project/>} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
