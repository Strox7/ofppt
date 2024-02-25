import * as React from "react";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import Stack from "@mui/joy/Stack";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";

import { styled } from "@mui/material/styles";
export default function ChangeData() {
  const CustomFab = styled(Fab)({
    position: "absolute",
    bottom: "35px",
    right: "23px",
    backgroundColor: "#1976d2",
    color: "white",
    "&:hover": {
      backgroundColor: "#135592", // Change the color on hover
    },
  });
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <CustomFab
        onClick={() => setOpen(true)}
        aria-label="edit"
        sx={{
          position: "absolute",
          bottom: "35px",
          right: "23px",
          backgroundColor: "#1976d2",
          color: "white",
        }}
      >
        <EditIcon />
      </CustomFab>

      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogContent>Fill in your new information.</DialogContent>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setOpen(false);
            }}
          >
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>FullName</FormLabel>
                <Input defaultValue="Mostafa bouhanout" autoFocus />
              </FormControl>
              <FormControl>
                <FormLabel>Number</FormLabel>
                <Input defaultValue="0660889037" type="number" />
              </FormControl>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input defaultValue="bhmostafa@gmail.com" type="email" />
              </FormControl>
              <FormControl>
                <FormLabel>Adress</FormLabel>
                <Input defaultValue="Casablanca Sidi maarouf" />
              </FormControl>

              <Button type="submit">Save</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
