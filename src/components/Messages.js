import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import DoneIcon from "@material-ui/icons/Done";

const useStyles = makeStyles(theme => ({
  close: {
    padding: theme.spacing(0.5)
  }
}));

export default function Messages({
  popMessage,
  setPopMessage,
  message,
  msgGood
}) {
  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setPopMessage(false);
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        open={popMessage ? popMessage : false}
        autoHideDuration={3000}
        onClose={handleClose}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
        message={<span id="message-id">{message}</span>}
        action={[
          <IconButton
            key="close"
            aria-label="close"
            className={classes.close}
            onClick={handleClose}
          >
            {msgGood ? (
              <DoneIcon style={{ color: "green" }} />
            ) : (
              <CloseIcon style={{ color: "rgb(220, 0, 78)" }} />
            )}
          </IconButton>
        ]}
      />
    </div>
  );
}
