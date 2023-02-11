import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';

//import component
import Navbar from './components/Navbar';

//import pages
import Home from './pages/Home';
import Mega from './pages/Mega';
import Lotofacil from './pages/Lotofacil';
import Quina from './pages/Quina';
import Lotomania from './pages/Lotomania';
import Duplasena from './pages/Duplasena';
import Timemania from './pages/Timemania';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mega" element={<Mega />}/>
        <Route path="/quina" element={<Quina />} />
        <Route path="/lotofacil" element={<Lotofacil />} />
        <Route path="/lotomania" element={<Lotomania />}/>
        <Route path="/duplasena" element={<Duplasena />}/>
        <Route path="/timemania" element={<Timemania />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
