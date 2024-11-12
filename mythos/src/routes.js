import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Header from "./components/Header";
import Error from "./pages/Error";

export default RoutesApp;

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <backgrond>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/*" element={<Error />} />

                </Routes>
            </backgrond>
        </BrowserRouter>
    );
}


