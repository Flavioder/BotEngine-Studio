import "./App.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/Pages/Home";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
