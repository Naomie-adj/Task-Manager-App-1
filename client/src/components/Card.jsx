import React from "react";
import { Draggable } from "react-beautiful-dnd";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

function CardItem({ text, index, onDelete }) {
  return (
    <Draggable draggableId={`${text}-${index}`} index={index}>
      {(provided) => (
        <Paper
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          sx={{
            padding: 1.5,
            backgroundColor: "#fff",
            marginBottom: 1.5,
            borderRadius: 2,
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: 14, lineHeight: 1.4 }}>{text}</Typography>
          <IconButton
            size="small"
            onClick={onDelete}
            sx={{ color: "rgba(0,0,0,0.54)" }}
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Paper>
      )}
    </Draggable>
  );
}

export default CardItem;

