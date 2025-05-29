import React, { useState } from "react";
import CardItem from "./Card";
import { Droppable } from "react-beautiful-dnd";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

function List({ listId, title, cards, onAddCard, onDeleteCard, onDeleteList }) {
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
            boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ letterSpacing: 0.5 }}
            >
              {title}
            </Typography>
            <IconButton onClick={() => onDeleteList(listId)} size="small" sx={{ color: "rgba(0,0,0,0.54)" }}>
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Box>

          {cards.map((text, index) => (
            <CardItem
              key={`${text}-${index}`}
              text={text}
              index={index}
              onDelete={() => onDeleteCard(listId, index)}
            />
          ))}

          {provided.placeholder}

          <TextField
            placeholder="Ajouter une tâche..."
            size="small"
            value={newCardText}
            onChange={(e) => setNewCardText(e.target.value)}
            fullWidth
            sx={{ mt: 1, mb: 1 }}
          />
          <Button
            onClick={handleAdd}
            variant="contained"
            size="small"
            sx={{
              borderRadius: 1,
              textTransform: "none",
              fontWeight: "bold",
              boxShadow:
                "0 2px 4px rgba(0,0,0,0.15)",
              "&:hover": {
                boxShadow:
                  "0 4px 8px rgba(0,0,0,0.2)",
              },
            }}
          >
            Ajouter
          </Button>
        </Paper>
      )}
    </Droppable>
  );
}

export default List;

