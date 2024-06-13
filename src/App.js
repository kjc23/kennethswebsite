import './App.css';
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/pages/Home";
import Bible from './components/pages/Bible';
import Album from './components/pages/Album';
import MusicHome from './components/pages/MusicHome';
import StudyHome from './components/pages/StudyHome';

function App() {


  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/BBWebsite' exact Component={Home} />
        <Route path='/bible' Component={Bible} />
        <Route path='/bible/1Peter' element={<StudyHome name="1 Peter" />} />
        <Route path='/bible/2Peter' element={<StudyHome name="2 Peter" />} />
        <Route path='/bible/Micah' element={<StudyHome name="Micah" />} />
        <Route path='/music' Component={MusicHome} />
        <Route path='/music/Album1' element={<Album name="Album 1" /> } />
        <Route path='/music/Album2' element={<Album name="Album 2" /> } />
        <Route path='/music/Album3' element={<Album name="Album 3" /> } />
        <Route path='/music/Album4' element={<Album name="Album 4" /> } />
      </Routes>
     </Router>
    </>
  );
}

export default App;
