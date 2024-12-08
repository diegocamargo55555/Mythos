import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home/home_page';
import Header from "./components/Header/navbar";
import Error from "./pages/Error/error._page";
import Pesquisa from "./pages/Pesquisa/pesquisa_page";
import Acessibilidade from "./pages/Acessibilidade/acessibilidade_page";
import Ranking from "./pages/Ranking/ranking_page";
import AntigonaConto from "./pages/Contos/AntigonaConto";
import ListaContos from "./pages/ListaContos/listaContos";

export default RoutesApp;

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <backgrond>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/*" element={<Error />}></Route>
                    <Route path="/Pesquisa" element={<Pesquisa />}></Route>
                    <Route path="/acessibilidade" element={<Acessibilidade />}></Route>
                    <Route path="/Ranking" element={<Ranking />}></Route>
                    <Route path="/Antigona-Conto" element={<AntigonaConto/>}></Route>
                    <Route path="/Lista-Contos" element={<ListaContos/>}></Route>
                </Routes>
            </backgrond>
        </BrowserRouter>
    );
}