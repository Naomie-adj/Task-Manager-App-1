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
            padding: { xs: "0.75rem", sm: "1rem" },
            backgroundColor: "#fff",
            marginBottom: 1,
            borderRadius: 1,
            boxShadow: 1,
            cursor: "pointer",
            "&:hover": {
              boxShadow: 2,
              backgroundColor: "#f8f9fa"
            },
            transition: "all 0.2s ease-in-out"
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "0.875rem", sm: "1rem" },
              wordBreak: "break-word",
              lineHeight: 1.4
            }}
          >
            {text.content}
            {text.description && (
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  fontSize: { xs: "0.75rem", sm: "0.875rem" },
                  marginTop: 0.5
                }}
              >
                {text.description}
              </Typography>
            )}
          </Typography>
        </Paper>
      )}
    </Draggable>
  );
}

export default CardItem;



