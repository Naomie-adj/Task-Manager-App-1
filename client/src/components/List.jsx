import React, { useState } from "react";
import Card from "./Card";
import { Droppable } from "react-beautiful-dnd";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

function List({ title, cards, listId, onAddCard }) {
  const [newCardText, setNewCardText] = useState("");

  const handleAddCard = () => {
    if (newCardText.trim() === "") return;
    onAddCard(listId, newCardText);
    setNewCardText("");
  };

  return (
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
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>

      <Droppable droppableId={listId}>
        {(provided) => (
          <Box
            ref={provided.innerRef}
            {...provided.droppableProps}
            sx={{ minHeight: 50, flexGrow: 1, mb: 2 }}
          >
            {cards.map((text, index) => (
              <Card key={index} text={text} index={index} />
            ))}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>

      <TextField
        variant="outlined"
        size="small"
        placeholder="Nouvelle carte"
        value={newCardText}
        onChange={(e) => setNewCardText(e.target.value)}
        fullWidth
        sx={{ mb: 1 }}
      />
      <Button
        variant="contained"
        color="success"
        onClick={handleAddCard}
        fullWidth
        size="small"
      >
        + Ajouter une carte
      </Button>
    </Paper>
  );
}

export default List;
