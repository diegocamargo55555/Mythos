import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home/home_page';
import Header from "./components/Header/navbar";
import Error from "./pages/Error/error._page";
import Pesquisa from "./pages/Pesquisa/pesquisa_page";
import Acessibilidade from "./pages/Acessibilidade/acessibilidade_page";
import Ranking from "./pages/Ranking/ranking_page";


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
                    <Route path="/Ranking" element={<Ranking />} />

                </Routes>
            </backgrond>
        </BrowserRouter>
    );
}



