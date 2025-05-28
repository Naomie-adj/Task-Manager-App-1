import React from "react";
import { Draggable } from "react-beautiful-dnd";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

function Card({ text, index }) {
  return (
    <Draggable draggableId={text + index} index={index}>
      {(provided) => (
        <Paper
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          elevation={3}
          sx={{
            padding: 1.5,
            marginBottom: 1,
            fontSize: 14,
            userSelect: "none",
            ...provided.draggableProps.style,
          }}
        >
          <Typography>{text}</Typography>
        </Paper>
      )}
    </Draggable>
  );
}

export default Card;






