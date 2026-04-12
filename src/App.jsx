import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import FlightResult from "./pages/FlightResult";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Hotel from "./pages/Hotel";
import Package from "./pages/Package";
import FlightDetails from "./pages/FlightDetails";
import HotelDetails from "./pages/HotelDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flights" element={<FlightResult />} />
        <Route path="/flights/:id" element={<FlightDetails />} />
        <Route path="/hotels" element={<Hotel />} />
        <Route path="/hotels/:id" element={<HotelDetails />} />
        <Route path="/packages" element={<Package />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
