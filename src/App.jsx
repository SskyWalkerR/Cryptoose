import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import Home from "./pages/home/Home";
import Coins from "./pages/coins/Coins";
import News from "./pages/news/News";
import Coin from "./pages/coin/Coin";
import Dropdown from "./components/dropDown/DropDown";
import Footer from "./components/footer/Footer";

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <BrowserRouter>
                <NavBar toggle={toggle} />
                <Dropdown isOpen={isOpen} toggle={toggle} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="coins" element={<Coins />} />
                    <Route path="news" element={<News />} />
                    <Route path="coins/:id" element={<Coin />} />
                </Routes>
                {/* <Footer /> */}
            </BrowserRouter>
        </div>
    );
}

export default App;
