import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Mega from './pages/Mega';
import Lotofacil from './pages/Lotofacil';
import Quina from './pages/Quina';
import Lotomania from './pages/Lotomania';
import Duplasena from './pages/Duplasena';
import Federal from './pages/Federal';
import Loteca from './pages/Loteca';
import Timemania from './pages/Timemania';
import Lotogol from './pages/Lotogol';

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
        <Route path="/federal" element={<Federal />}/>
        <Route path="/loteca" element={<Loteca />}/>
        <Route path="/timemania" element={<Timemania />}/>
        <Route path="/lotogol" element={<Lotogol />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
