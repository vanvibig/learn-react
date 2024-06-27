import React, { useState } from "react";
import {
  Drawer,
  TextField,
  Button,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CreateContactDrawer: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setOpen(open);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={toggleDrawer(true)}>
        Open Form
      </Button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            backgroundImage:
              "linear-gradient(-303deg,#00a4bd,#00afb2 56%,#00bda5)",
            width: 300,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            p: 2,
          }}
        >
          <Box>
            <Typography variant="h6">Create Contact</Typography>
          </Box>
          <Box>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>
        <Box
          sx={{
            width: 300,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            p: 2,
          }}
        >
          <Box>
            <form>
              <TextField fullWidth margin="normal" label="Email" type="email" />
              <TextField
                fullWidth
                margin="normal"
                label="First name"
                type="text"
              />
              <TextField
                fullWidth
                margin="normal"
                label="Last name"
                type="text"
              />
              <TextField
                fullWidth
                margin="normal"
                label="Job title"
                type="text"
              />
              <TextField
                fullWidth
                margin="normal"
                label="Phone number"
                type="tel"
              />
            </form>
          </Box>
          <Box display="flex" justifyContent="space-between" mt={2}>
            <Button variant="contained" color="primary" type="submit">
              Create
            </Button>
            <Button variant="outlined" color="secondary">
              Create and add another
            </Button>
            <Button
              variant="text"
              color="primary"
              onClick={toggleDrawer(false)}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Drawer>
    </div>
  );
};

export default CreateContactDrawer;
