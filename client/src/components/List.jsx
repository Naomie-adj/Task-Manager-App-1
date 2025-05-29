import React, { useState } from "react";
import CardItem from "./Card";
import { Droppable } from "react-beautiful-dnd";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

function List({ listId, title, cards, onAddCard }) {
  const [newCardText, setNewCardText] = useState("");

  const handleAdd = () => {
    if (newCardText.trim() === "") return;
    onAddCard(listId, newCardText);
    setNewCardText("");
  };

  return (
    <Droppable droppableId={listId}>
      {(provided) => (
        <Paper
          ref={provided.innerRef}
          {...provided.droppableProps}
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
          <Typography variant="h6" fontWeight="bold">
            {title}
          </Typography>

          {cards.map((text, index) => (
            <CardItem key={index} text={text} index={index} />
          ))}

          {provided.placeholder}

          <TextField
            placeholder="Ajouter une tâche..."
            size="small"
            value={newCardText}
            onChange={(e) => setNewCardText(e.target.value)}
            fullWidth
          />
          <Button onClick={handleAdd} variant="contained" size="small">
            Ajouter
          </Button>
        </Paper>
      )}
    </Droppable>
  );
}

export default List;

  
  
