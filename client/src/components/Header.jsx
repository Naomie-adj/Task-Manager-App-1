import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#026aa7" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Mon Tableau Trello
        </Typography>
        <Box>
          <Button color="inherit">Accueil</Button>
          <Button color="inherit">À propos</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
