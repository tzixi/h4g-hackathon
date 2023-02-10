import * as React from "react";
import {
  Box,
  Stack,
  Typography,
  Button,
  Modal,
  IconButton,
  Grid,
  List,
  CircularProgress,
  Divider,
  TextField,
  Checkbox,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

interface AssesorProps {
  stateChanger: React.Dispatch<React.SetStateAction<boolean>>,
  open: boolean,
}

export default function NewAssessment({stateChanger, open}: AssesorProps) {

  const handleClose = () => {
    stateChanger(false);
  }
  
  return (
    <Modal open={open}
      onClose={handleClose}>
    <Box
      sx={{
        position: "absolute" as "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "30%",
        height: "70vh",
        bgcolor: "background.paper",
        border: "1px solid #000",
        boxShadow: 24,
        p: 4,
      }}
    >
      <IconButton>
        <CloseIcon onClick={() => {stateChanger(false)}} />
      </IconButton>
      <Box
        sx={{
          display: "flex",
          position: "fixed" /* or absolute */,
          top: "40%",
          left: "47%",
        }}
      ></Box>
      <Box justifyItems={"center"} sx={{ width: "100%", paddingLeft: "2%" }}>
        <List>
          <Grid xs={6}>
            <Typography variant="h5" gutterBottom color={"black"}>
              Add New Assessment
              <Divider
                color="#17475f"
                sx={{ height: 10, width: "100%", marginTop: "1%" }}
              />
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              marginBottom={1}
              textAlign="center"
            >
              <Typography
                id="modal-modal-description"
                variant="h6"
                sx={{ mt: 2, color: "black" }}
              >
                URL:
              </Typography>
              <TextField
                fullWidth
                variant="filled"
                label="Enter URL here"
                id="fullWidth"
                sx={{ borderRadius: "1px" }}
              />
            </Stack>
            <Typography
              id="modal-modal-description"
              variant="h6"
              sx={{ color: "black" }}
            >
              Tests to conduct:
            </Typography>
          </Grid>
          <Grid xs={3}>
            <Stack>
              <Stack direction="row" spacing={2} textAlign="left">
                <Stack direction="column">
                  <Checkbox />
                  <Checkbox sx = {{marginTop: -1}}/>
                  <Checkbox sx = {{marginTop: -1}}/>
                  <Checkbox sx = {{marginTop: -1}}/>
                  <Checkbox sx = {{marginTop: 2.3}}/>
                </Stack>

                <Stack direction="column">
                  <Typography
                    id="modal-modal-description"
                    variant="body1"
                    sx={{ mt: 1, color: "black" }}
                  >
                    Visual test (Perceivable)
                  </Typography>
                  <Typography
                    id="modal-modal-description"
                    variant="body1"
                    sx={{ mt: 1.5, color: "black" }}
                  >
                    Usability test (Operable)
                  </Typography>
                  <Typography
                    id="modal-modal-description"
                    variant="body1"
                    sx={{ mt: 1.3, color: "black" }}
                  >
                    Content/Media test(Understandable)
                  </Typography>
                  <Typography
                    id="modal-modal-description"
                    variant="body1"
                    sx={{ mt: 1.3, color: "black" }}
                  >
                    Functional/Responsiveness test (Understandable)
                  </Typography>
                  <Typography
                    id="modal-modal-description"
                    variant="body1"
                    sx={{ mt: 4.1, color: "black" }}
                  >
                    Select All
                  </Typography>
                </Stack>
              </Stack>
              <Box
                display={"flex"}
                flex={3}
                justifyContent={"center"}
                sx={{ paddingTop: "5%" }}
              >
                <Grid display={"flex"} spacing={3}>
                  <Button
                    startIcon={<AddIcon />}
                    sx={{
                      backgroundColor: "#E0E0E0",
                      color: "#000000DE",
                      borderRadius: "15px",
                      marginBottom: "2%",
                      gap: "10px",
                    }}
                  >
                    Add Assessment
                  </Button>
                </Grid>
              </Box>
            </Stack>
          </Grid>
        </List>
      </Box>
    </Box>
    </Modal>
  );
}
