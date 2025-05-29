import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Board from "./components/Board";
import Register from "./pages/Register"; // on va le créer juste après


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<><Hero /><Board /></>} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;














