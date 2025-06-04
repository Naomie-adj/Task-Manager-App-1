import React, { useState, useEffect } from "react";
import List from "./List";
import { DragDropContext } from "react-beautiful-dnd";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";

function Board({ api }) {
  const [lists, setLists] = useState([
    { id: "list-1", title: "À faire", cards: [] },
    { id: "list-2", title: "En cours", cards: [] },
    { id: "list-3", title: "Terminé", cards: [] },
  ]);
  const [newListTitle, setNewListTitle] = useState("");

  useEffect(() => {
    // Charger les tâches depuis l'API
    api.get('/tasks/')
      .then((response) => {
        const tasks = response.data;
        // Organiser les tâches dans les listes appropriées
        const updatedLists = lists.map(list => ({
          ...list,
          cards: tasks.filter(task => task.status === list.id).map(task => ({
            id: task.id,
            content: task.title,
            description: task.description
          }))
        }));
        setLists(updatedLists);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des tâches:', error);
      });
  }, []);

  const handleDragEnd = async (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceListIndex = lists.findIndex((l) => l.id === source.droppableId);
    const destListIndex = lists.findIndex((l) => l.id === destination.droppableId);

    const sourceCards = Array.from(lists[sourceListIndex].cards);
    const [movedCard] = sourceCards.splice(source.index, 1);

    try {
      // Mettre à jour le statut de la tâche dans l'API
      await api.patch(`/tasks/${movedCard.id}/`, {
        status: destination.droppableId
      });

      if (source.droppableId === destination.droppableId) {
        sourceCards.splice(destination.index, 0, movedCard);
        const updatedLists = [...lists];
        updatedLists[sourceListIndex].cards = sourceCards;
        setLists(updatedLists);
      } else {
        const destCards = Array.from(lists[destListIndex].cards);
        destCards.splice(destination.index, 0, movedCard);

        const updatedLists = [...lists];
        updatedLists[sourceListIndex].cards = sourceCards;
        updatedLists[destListIndex].cards = destCards;
        setLists(updatedLists);
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour de la tâche:', error);
    }
  };

  const handleAddCard = async (listId, text) => {
    try {
      const response = await api.post('/tasks/', {
        title: text,
        status: listId,
        description: ''
      });
      
      const updatedLists = lists.map((list) =>
        list.id === listId 
          ? { 
              ...list, 
              cards: [...list.cards, {
                id: response.data.id,
                content: response.data.title,
                description: response.data.description
              }]
            } 
          : list
      );
      setLists(updatedLists);
    } catch (error) {
      console.error('Erreur lors de l\'ajout de la tâche:', error);
    }
  };

  const handleAddList = () => {
    if (newListTitle.trim() === "") return;
    const newList = {
      id: `list-${Date.now()}`,
      title: newListTitle,
      cards: [],
    };
    setLists([...lists, newList]);
    setNewListTitle("");
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "flex-start" },
          gap: 2,
          padding: { xs: 1, sm: 2, md: 3 },
          backgroundColor: "#0079bf",
          minHeight: "100vh",
          overflowX: "auto",
          width: "100%",
        }}
      >
        {lists.map((list) => (
          <List
            key={list.id}
            listId={list.id}
            title={list.title}
            cards={list.cards}
            onAddCard={handleAddCard}
          />
        ))}

        {/* Ajouter une nouvelle liste */}
        <Paper
          sx={{
            backgroundColor: "#ebecf0",
            padding: { xs: 1, sm: 2 },
            width: { xs: "100%", sm: 270 },
            maxWidth: 270,
            borderRadius: 2,
            flexShrink: 0,
            boxShadow: 1,
            display: "flex",
            flexDirection: "column",
            gap: 1,
            margin: { xs: "0 16px", sm: 0 },
          }}
        >
          <TextField
            variant="outlined"
            size="small"
            placeholder="Titre de la liste"
            value={newListTitle}
            onChange={(e) => setNewListTitle(e.target.value)}
            fullWidth
          />
          <Button 
            variant="contained" 
            onClick={handleAddList}
            sx={{
              whiteSpace: "nowrap",
              fontSize: { xs: "0.875rem", sm: "1rem" }
            }}
          >
            + Ajouter une liste
          </Button>
        </Paper>
      </Box>
    </DragDropContext>
  );
}

export default Board;



