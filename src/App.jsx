import "./App.css";
import Header from "./header/Header";
import Hero from "./movieInfo/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/movie/:id" element={<Hero />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
