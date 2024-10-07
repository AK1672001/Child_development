import Navbar from "./Component/Navbar";
import { Routes, Route } from "react-router-dom";
import Udeshya from "./Component/Udeshya";
import Homepage from "./Pages/Home";
import ContactPage from "./Component/Contact";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Udeshya />}></Route>
        <Route path="/udeshya" element={<Udeshya />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
