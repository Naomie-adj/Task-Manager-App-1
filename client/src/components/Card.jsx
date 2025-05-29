import React from "react";
import { Draggable } from "react-beautiful-dnd";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

function CardItem({ text, index }) {
  return (
    <Draggable draggableId={`${text}-${index}`} index={index}>
      {(provided) => (
        <Paper
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          sx={{
            padding: 1,
            backgroundColor: "#fff",
            marginBottom: 1,
            borderRadius: 1,
            boxShadow: 1,
            cursor: "pointer",
          }}
        >
          <Typography>{text}</Typography>
        </Paper>
      )}
    </Draggable>
  );
}

export default CardItem;



