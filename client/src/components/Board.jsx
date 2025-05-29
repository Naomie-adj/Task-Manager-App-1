// Board.js
import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import List from "./List";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Board() {
  const [lists, setLists] = useState({
    "list-1": { title: "À faire", cards: ["Apprendre React", "Lire un article"] },
    "list-2": { title: "En cours", cards: ["Coder une app"] },
    "list-3": { title: "Terminé", cards: ["Tâche finie 1"] },
  });

  const [newListTitle, setNewListTitle] = useState("");

  const handleDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceList = lists[source.droppableId];
    const destList = lists[destination.droppableId];
    const [movedCard] = sourceList.cards.splice(source.index, 1);

    if (source.droppableId === destination.droppableId) {
      sourceList.cards.splice(destination.index, 0, movedCard);
      setLists({ ...lists, [source.droppableId]: sourceList });
    } else {
      destList.cards.splice(destination.index, 0, movedCard);
      setLists({
        ...lists,
        [source.droppableId]: sourceList,
        [destination.droppableId]: destList,
      });
    }
  };

  const handleAddCard = (listId, text) => {
    const updatedCards = [...lists[listId].cards, text];
    setLists({ ...lists, [listId]: { ...lists[listId], cards: updatedCards } });
  };

  const handleDeleteCard = (listId, index) => {
    const updatedCards = lists[listId].cards.filter((_, i) => i !== index);
    setLists({ ...lists, [listId]: { ...lists[listId], cards: updatedCards } });
  };

  const handleAddList = () => {
    if (newListTitle.trim() === "") return;
    const newId = `list-${Date.now()}`;
    setLists({
      ...lists,
      [newId]: { title: newListTitle, cards: [] },
    });
    setNewListTitle("");
  };

  const handleDeleteList = (listId) => {
    const updatedLists = { ...lists };
    delete updatedLists[listId];
    setLists(updatedLists);
  };

  return (
    <Box sx={{ padding: 2, backgroundColor: "black", minHeight: "100vh" }}>
      <Typography variant="h4" gutterBottom sx={{ color: "#ffffff" }}>
        Mon Trello
      </Typography>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Box sx={{ display: "flex", gap: 2, overflowX: "auto", paddingBottom: 2 }}>
          {Object.entries(lists).map(([listId, listData]) => (
            <List
              key={listId}
              listId={listId}
              title={listData.title}
              cards={listData.cards}
              onAddCard={handleAddCard}
              onDeleteCard={handleDeleteCard}
              onDeleteList={handleDeleteList}
            />
          ))}
          <Box sx={{ minWidth: 270 }}>
            <TextField
              size="small"
              label="Nouvelle liste"
              value={newListTitle}
              onChange={(e) => setNewListTitle(e.target.value)}
              fullWidth
              sx={{ mb: 1, input: { color: "white" }, label: { color: "white" } }}
            />
            <Button variant="contained" onClick={handleAddList} fullWidth>
              Ajouter une liste
            </Button>
          </Box>
        </Box>
      </DragDropContext>
    </Box>
  );
}

export default Board;









