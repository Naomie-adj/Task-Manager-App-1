<<<<<<< HEAD
import { useEffect, useState } from 'react';
import api from './api';  // importe la config axios

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    api.get('/tasks/')
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des tasks:', error);
      });
  }, []);

  return (
    <div>
      <h1>Liste des tâches</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
=======
import React from "react";
import Board from "./components/Board";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Board />
    </>
>>>>>>> 2d745a1e8f33b2c34cee133cf19703eb645dae22
  );
}

export default App;
<<<<<<< HEAD
=======












>>>>>>> 2d745a1e8f33b2c34cee133cf19703eb645dae22
