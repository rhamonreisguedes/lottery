//import components from react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import component
import Navbar from "./components/Navbar";

//import pages
import Home from "./pages/Home";
import Mega from "./pages/Mega";
import Lotofacil from "./pages/Lotofacil";
import Quina from "./pages/Quina";
import Lotomania from "./pages/Lotomania";
import Duplasena from "./pages/Duplasena";
import Timemania from "./pages/Timemania";
import NotFound from "./pages/NotFound";

//app routes
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mega" element={<Mega />} />
        <Route path="/quina" element={<Quina />} />
        <Route path="/lotofacil" element={<Lotofacil />} />
        <Route path="/lotomania" element={<Lotomania />} />
        <Route path="/duplasena" element={<Duplasena />} />
        <Route path="/timemania" element={<Timemania />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
