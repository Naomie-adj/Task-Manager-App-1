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
  );
}

export default App;
