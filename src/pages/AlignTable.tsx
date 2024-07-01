import React from "react";
import UserTable from "./UserTable";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useQueryClient } from "@tanstack/react-query";
import { Button } from "@mui/material";

const AlignTable: React.FC = () => {
  const queryClient = useQueryClient()
  return (
    <>
      <Container>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} />
            <Grid item xs={12} />
            <Grid item xs={12} />
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
              <UserTable />
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container>
        <Button variant="contained"
          onClick={() => {
            queryClient.invalidateQueries({ queryKey: ['get-users'] })
          }}
        >refetch</Button>
      </Container>
    </>
  );
};

export default AlignTable;
