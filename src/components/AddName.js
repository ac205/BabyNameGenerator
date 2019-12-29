import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from "@material-ui/core";

export default function AddName({ handleNameClose, addNameOpen, handleClick }) {
  const handleAdd = () => {
    let name = document.getElementById("manual-name").value;
    handleClick(null, name);
    handleNameClose();
  };
  return (
    <div>
      <Dialog
        open={addNameOpen}
        onClose={handleNameClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Add Baby Name"}</DialogTitle>
        <DialogContent>
          <TextField id="manual-name" label="Enter Name" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleNameClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAdd} color="primary" autoFocus>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
