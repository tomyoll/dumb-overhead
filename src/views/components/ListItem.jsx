import React from "react";
import Box from "@mui/material/Box";
import { Grid, Stack, Typography } from "@mui/material";

// eslint-disable-next-line react/prop-types
function ListItem({ title, time }) {
  return (
    <Box
      sx={{
        width: "70%",
        height: "10rem",
        backgroundColor: "blueviolet"
      }}>
      <Grid container direction="row" wrap="nowrap">
        <Grid item xs={11}>
          <Box>
            <Stack justifyContent="center" spacing={3} ml={3} mt={7}>
              <Typography variant="h5">{title}</Typography>
              <Typography variant="h8">{time}</Typography>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs mt={6}>
          <Stack justifyContent="center" alignItems="center">
            <Typography variant="h3">1</Typography>
            <Typography>Answers</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ListItem;
