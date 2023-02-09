import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Mega from './pages/Mega';
import Lotofacil from './pages/Lotofacil';
import Quina from './pages/Quina';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mega" element={<Mega />}/>
        <Route path="/quina" element={<Quina />} />
        <Route path="/lotofacil" element={<Lotofacil />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
