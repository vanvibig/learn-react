import React, { useRef } from "react";
import { Box, TextField, Button, Container, Grid, Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const BigForm: React.FC = () => {
  const formTopRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    formTopRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          maxHeight: "400px", // adjust height as needed
          overflowY: "scroll",
          padding: "16px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          position: "relative",
        }}
      >
        <div ref={formTopRef} />
        <form>
          <Grid container spacing={2}>
            {/* Add your form fields here */}
            {Array.from({ length: 20 }).map((_, index) => (
              <Grid item xs={12} key={index}>
                <TextField
                  fullWidth
                  label={`Field ${index + 1}`}
                  variant="outlined"
                />
              </Grid>
            ))}
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
      <Fab
        color="primary"
        aria-label="scroll to top"
        onClick={scrollToTop}
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Container>
  );
};

export default BigForm;
