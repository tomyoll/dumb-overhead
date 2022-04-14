import { AppBar, Avatar, Button, Toolbar } from "@mui/material";
import React from "react";

function MainLayout() {
  return (
    <AppBar>
      <Toolbar>
        <Avatar />
        <Button variant="outlined">Register</Button>
      </Toolbar>
    </AppBar>
  );
}

export default MainLayout;
