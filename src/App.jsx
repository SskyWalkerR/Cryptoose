import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import Home from "./pages/home/Home";
import Coins from "./pages/coins/Coins";
import News from "./pages/news/News";
import About from "./pages/about/About";
import Coin from "./pages/coin/Coin";

function App() {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="coins" element={<Coins />} />
                    <Route path="news" element={<News />} />
                    <Route path="about" element={<About />} />
                    <Route path="coins/:id" element={<Coin />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
