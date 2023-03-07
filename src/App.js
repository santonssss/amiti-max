import "./App.css";
import Footer from "./components/footer/footer";
import { NavLink, Route, Routes } from "react-router-dom";
import Info from "./components/information/info";
import Home from "./components/home/home";
import Fans from "./components/fans/fans";

import About from "./components/aboutcs/about";
function App() {
  return (
    <div className="App">
      <Info />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fans" element={<Fans />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/youtube"
          element={() => {
            window.location.href = "youtube.com";
          }}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
