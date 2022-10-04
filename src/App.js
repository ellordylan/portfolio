import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages'
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

function App() {
  return (
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="portfolio" element={<Portfolio/>}/>
          <Route path="resume" element={<Resume/>}/>
      </Routes>

  );
}

export default App;
