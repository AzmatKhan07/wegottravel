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
import MakePayment from "./pages/MakePayment";
import Contact from "./pages/Contact";

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
        <Route path="/payment" element={<MakePayment />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
