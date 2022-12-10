import "./assets/bootstrap.css";
import "./assets/style.css";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import CarsPage from "./pages/CarsPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/cars" element={<CarsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
