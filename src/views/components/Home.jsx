import React from "react";
import { Stack } from "@mui/material";
import ListItem from "./ListItem";

function QuestionsList() {
  return (
    <Stack spacing={2} justifyContent="center" alignItems="center">
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </Stack>
  );
}

export default QuestionsList;
