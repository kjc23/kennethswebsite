import './App.css';
import Navbar from "./components/Navbar"
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/pages/Home";
import Bible from './components/pages/Bible';
import Album from './components/pages/Album';
import MusicHome from './components/pages/MusicHome';
import StudyHome from './components/pages/StudyHome';
import RecipesHome from './components/pages/RecipesHome';
import Recipe from './components/pages/Recipe';
import Viewer360 from './components/pages/VRHome';
import VRHome from './components/pages/VRHome';

function App() {


  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/bible' Component={Bible} />
        <Route path='/bible/1Peter' element={<StudyHome name="1 Peter" />} />
        <Route path='/bible/2Peter' element={<StudyHome name="2 Peter" />} />
        <Route path='/bible/Micah' element={<StudyHome name="Micah" />} />
        <Route path='/bible/Mark' element={<StudyHome name="Mark" />} />
        <Route path='/music' Component={MusicHome} />
        <Route path='/music/Album1' element={<Album name="Album 1" /> } />
        <Route path='/music/Album2' element={<Album name="Album 2" /> } />
        <Route path='/music/Album3' element={<Album name="Album 3" /> } />
        <Route path='/music/Album4' element={<Album name="Album 4" /> } />
        <Route path='/recipes' Component={RecipesHome} />
        <Route path='/recipes/gluten-free-bread' element={<Recipe title="Gluten Free Bread" src="/kennethswebsite/images/bread.jpg" data="gluten-free-bread.json" />} />
        <Route path='/recipes/cabbage-potatoes-sausage' element={<Recipe title="Cabbage, Potatoes, and Sausage One Dish" src="/kennethswebsite/images/cabbage-potatoes-sausage.jpeg" data="cabbage-potatoes-sausage.json" />} />
        <Route path='/recipes/chocolate-coffee-silk-pie' element={<Recipe title="Chocolate-Coffee Silk Pie" src="/kennethswebsite/images/choccoffpie.webp" data="chocolate-coffee-silk-pie.json" />} />
        <Route path='/recipes/instantpot-teriyaki-chicken' element={<Recipe title="Intant Pot Teriyaki Chicken" src="/kennethswebsite/images/teriyaki.jpg" data="teriyaki-chicken.json" />} />
        <Route path='/vr' Component={VRHome} />
        <Route path='/vr/viewer' Component={Viewer360} />
      </Routes>
     </Router>
    </>
  );
}

export default App;
