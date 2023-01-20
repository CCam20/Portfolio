import './App.css';
import MainContainer from './container/MainContainer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Link} from 'react-router-dom'
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Bio from './components/Bio';

function App() {
  return (


    <>
    <div className="App">
    <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<Bio/>} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
    </Router>
    </div>
    </>

  );
}

export default App;
