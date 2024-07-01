import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  TextField,
  Typography
} from "@mui/material";
import React, { useState } from "react";

const CreateContactDrawer: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setOpen(open);
  };

  return (
    <div>
      <Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="flex-start"
          height="100vh"
          pt={2} // Adjust the padding-top to control the space from the top
        >
          <Button
            variant="contained"
            color="primary"
            onClick={toggleDrawer(true)}
          >
            Open Form
          </Button>
        </Box>
        <Box />
      </Box>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            backgroundImage:
              "linear-gradient(-303deg,#00a4bd,#00afb2 56%,#00bda5)",
            width: 500,
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
            width: 500,
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
              <Box display="flex" gap={2}>
                <Box flex="0 0 25%">
                  <TextField
                    fullWidth
                    margin="normal"
                    label="Country Code"
                    type="tel"
                  />
                </Box>
                <Box flex="1">
                  <TextField
                    fullWidth
                    margin="normal"
                    label="Phone Number"
                    type="tel"
                  />
                </Box>
              </Box>
            </form>
          </Box>
          <Box display="flex" sx={{ gap: 2 }}>
            <Box>
              <Button variant="contained" color="primary" type="submit">
                Create
              </Button>
            </Box>
            <Box>
              <Button variant="outlined" color="secondary">
                Create Another
              </Button>
            </Box>
            <Box>
              <Button
                variant="text"
                color="primary"
                onClick={toggleDrawer(false)}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </div >
  );
};

export default CreateContactDrawer;
