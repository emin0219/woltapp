import "./App.css";
import Shift from "./Shift";
import Footer from "./Footer";
import Available from "./Available";
import Helsinki from "./Helsinki";
import Tampere from "./Tampere";
import Turku from "./Turku";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shift />} />
        <Route path="/available" element={<Available />}/>
        <Route path="/available/helsinki" element={<Helsinki />} />
        <Route path="/available/tampere" element={<Tampere />} />
        <Route path="/available/turku" element={<Turku />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
