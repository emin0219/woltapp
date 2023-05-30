import "./App.css";
import Shift from "./Shift";
import Footer from "./Footer";
import Available from "./Available";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shift />} />
        <Route path="/available" element={<Available />}></Route>
        <Route path="/tampere" element={<Available />} />
        <Route path="/available" element={<Available />} />
        <Route path="/turku" element={<Available />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
