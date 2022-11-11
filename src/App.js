import './App.css';
import MainContainer from './container/MainContainer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Link} from 'react-router-dom'
import NavBar from './components/NavBar';
import Projects from './components/Projects';

function App() {
  return (


    <>
    <div className="App">
    <Router>
      <NavBar />
        <Routes>
        <MainContainer />
          <Route path="/" element={<MainContainer />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="*" element={<ErrorPage/>} /> 							 */}
        </Routes>
    </Router>
    </div>
    </>

  );
}

export default App;
