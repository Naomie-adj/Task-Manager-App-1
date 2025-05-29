import React, { useState } from "react";
import List from "./List";
import { DragDropContext } from "react-beautiful-dnd";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";

function Board() {
  const [lists, setLists] = useState([
    { id: "list-1", title: "À faire", cards: ["Tâche 1", "Tâche 2"] },
    { id: "list-2", title: "En cours", cards: ["Tâche 3"] },
    { id: "list-3", title: "Terminé", cards: ["Tâche 4"] },
  ]);
  const [newListTitle, setNewListTitle] = useState("");

  const handleDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceListIndex = lists.findIndex((l) => l.id === source.droppableId);
    const destListIndex = lists.findIndex((l) => l.id === destination.droppableId);

    const sourceCards = Array.from(lists[sourceListIndex].cards);
    const [movedCard] = sourceCards.splice(source.index, 1);

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
  };

  const handleAddCard = (listId, text) => {
    const updatedLists = lists.map((list) =>
      list.id === listId ? { ...list, cards: [...list.cards, text] } : list
    );
    setLists(updatedLists);
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
          alignItems: "flex-start",
          gap: 2,
          padding: 3,
          backgroundColor: "#0079bf",
          minHeight: "100vh",
          overflowX: "auto",
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
            padding: 2,
            width: 270,
            borderRadius: 2,
            flexShrink: 0,
            boxShadow: 1,
            display: "flex",
            flexDirection: "column",
            gap: 1,
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
          <Button variant="contained" onClick={handleAddList}>
            + Ajouter une liste
          </Button>
        </Paper>
      </Box>
    </DragDropContext>
  );
}

export default Board;



