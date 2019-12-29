import React from "react";
import {
  makeStyles,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction,
  Typography
} from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { babypics } from "../babypics";

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center"
  },
  list: {
    width: "50%",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "95%"
    }
  },
  listItem: {
    border: "1px solid black",
    margin: "5px 0",
    "&:hover": {
      backgroundColor: theme.palette.primary.light
    }
  }
}));

const Favorites = ({ handleClickOpen, favNames }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h6" style={{ marginTop: 15 }}>
        Favorites
      </Typography>
      <List className={classes.list}>
        {favNames
          ? favNames
              .sort((a, b) => a.name.localeCompare(b.name))
              .map(name => (
                <ListItem key={name.name} className={classes.listItem}>
                  <ListItemAvatar>
                    <Avatar
                      alt={babypics[Math.floor(Math.random() * 4)]}
                      src={babypics[Math.floor(Math.random() * 4)]}
                    />
                  </ListItemAvatar>
                  <ListItemText primary={name.name + " Corbeil"} />
                  <ListItemSecondaryAction
                    onClick={handleClickOpen}
                    id={name.name}
                  >
                    <IconButton edge="end" color="secondary">
                      <HighlightOffIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))
          : null}
      </List>
    </div>
  );
};
export default Favorites;
