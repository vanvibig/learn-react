import React from "react";
import UserTable from "./UserTable";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const AlignTable: React.FC = () => {
  return (
    <Container>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <UserTable />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AlignTable;
