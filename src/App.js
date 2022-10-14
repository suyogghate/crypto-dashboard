import './App.css';
import Header from "./components/Header";
import Home from "./pages/Home";
import DashBoard from "./pages/Dashboard";
import Search from "./pages/Search";
import CoinPage from "./pages/CoinPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/search" element={<Search />} />
        <Route path="/header" element={<Header />} />
        <Route path="/coin" element={<CoinPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;