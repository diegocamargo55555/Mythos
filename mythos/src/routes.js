import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Header from "./components/Header";
import Error from "./pages/Error";
import Pesquisa from "./pages/Pesquisa";
import Acessibilidade from "./pages/Acessibilidade";

export default RoutesApp;

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <backgrond>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/*" element={<Error />} />
                    <Route path="/Pesquisa" element={<Pesquisa />} />
                    <Route path="/acessibilidade" element={<Acessibilidade />} />
                </Routes>
            </backgrond>
        </BrowserRouter>
    );
}


