import React, { useState } from "react";
import List from "./List";
import { DragDropContext } from "react-beautiful-dnd";
import Box from "@mui/material/Box";

function Board() {
  const [lists, setLists] = useState([
    { id: "list-1", title: "À faire", cards: ["Tâche 1", "Tâche 2"] },
    { id: "list-2", title: "En cours", cards: ["Tâche 3"] },
    { id: "list-3", title: "Terminé", cards: ["Tâche 4"] },
  ]);

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

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Box
        sx={{
          display: "flex",
          gap: 3,
          padding: 3,
          backgroundColor: "#0079bf",
          minHeight: "100vh",
          flexWrap: "wrap",
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
      </Box>
    </DragDropContext>
  );
}

export default Board;
