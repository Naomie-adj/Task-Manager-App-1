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
          <Typography 
            variant="h6" 
            fontWeight="bold"
            sx={{
              fontSize: { xs: "1rem", sm: "1.25rem" },
              padding: { xs: "0.5rem", sm: "1rem" }
            }}
          >
            {title}
          </Typography>

          <Box sx={{ 
            display: "flex", 
            flexDirection: "column", 
            gap: 1,
            maxHeight: { xs: "none", sm: "calc(100vh - 300px)" },
            overflowY: "auto",
            padding: { xs: "0.5rem", sm: "1rem" }
          }}>
            {cards.map((text, index) => (
              <CardItem key={index} text={text} index={index} />
            ))}
            {provided.placeholder}
          </Box>

          <Box sx={{ 
            display: "flex", 
            flexDirection: "column", 
            gap: 1,
            padding: { xs: "0.5rem", sm: "1rem" }
          }}>
            <TextField
              placeholder="Ajouter une tâche..."
              size="small"
              value={newCardText}
              onChange={(e) => setNewCardText(e.target.value)}
              fullWidth
              sx={{
                "& .MuiInputBase-root": {
                  fontSize: { xs: "0.875rem", sm: "1rem" }
                }
              }}
            />
            <Button 
              onClick={handleAdd} 
              variant="contained" 
              size="small"
              sx={{
                fontSize: { xs: "0.875rem", sm: "1rem" }
              }}
            >
              Ajouter
            </Button>
          </Box>
        </Paper>
      )}
    </Droppable>
  );
}

export default List;

  
  
