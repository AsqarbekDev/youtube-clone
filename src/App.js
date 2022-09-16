import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Header from "./components/Header";
import Search from "./screens/Search";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/" element={<Home />} />
          <Route path="/search/:searchTerm" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
