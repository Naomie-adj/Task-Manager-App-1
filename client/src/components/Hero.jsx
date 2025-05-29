import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Hero() {
  return (
    <Box
      sx={{
        padding: 6,
        backgroundColor: "#0079bf", // Bleu Trello
        textAlign: "center",
        color: "white",
        borderBottom: "1px solid #ccc",
      }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Capturez, organisez et traitez vos tâches où que vous soyez.
      </Typography>
      <Typography variant="subtitle1" sx={{ opacity: 0.9 }} gutterBottom>
        Oubliez l'encombrement et le chaos. Libérez votre productivité grâce à Trello.
      </Typography>

      <Box
        sx={{
          mt: 4,
          display: "flex",
          justifyContent: "center",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
          maxWidth: 500,
          margin: "auto",
        }}
      >
        <TextField
          label="E-mail"
          variant="outlined"
          size="small"
          fullWidth
          sx={{ backgroundColor: "white", borderRadius: 1 }}
        />
        <Button
          variant="contained"
          size="medium"
          sx={{
            backgroundColor: "#5aac44",
            "&:hover": {
              backgroundColor: "#519839",
            },
          }}
        >
          Inscrivez-vous, c'est gratuit !
        </Button>
      </Box>
    </Box>
  );
}

export default Hero;

