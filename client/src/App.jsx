import React from "react";
import Board from "./components/Board";
import Header from "./components/Header";
import api from './api';

function App() {
  return (
    <>
      <Header />
      <Board api={api} />
    </>
  );
}

export default App;
