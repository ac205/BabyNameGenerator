import React from "react";
import {
  makeStyles,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction,
  Typography
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
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

const NamesList = ({ handleClick, handleButton, handleChecked, nameList }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h6" style={{ marginTop: 15 }}>
        Random Names
      </Typography>
      <List className={classes.list}>
        {nameList
          ? nameList
              .sort((a, b) => a.name.localeCompare(b.name))
              .map(name => (
                <ListItem
                  key={name.surname.length * Math.random(55)}
                  className={classes.listItem}
                >
                  <ListItemAvatar>
                    <Avatar
                      alt={babypics[Math.floor(Math.random() * 4)]}
                      src={babypics[Math.floor(Math.random() * 4)]}
                    />
                  </ListItemAvatar>
                  <ListItemText primary={name.name + " Corbeil"} secondary={name.region}/>
                  <ListItemSecondaryAction onClick={handleClick} id={name.name}>
                    <IconButton edge="end" color="primary">
                      {handleChecked(name.name) ? (
                        <FavoriteIcon />
                      ) : (
                        <FavoriteBorderIcon />
                      )}
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))
          : null}
      </List>
      <Button
        variant="contained"
        size="large"
        color="primary"
        onClick={handleButton}
        style={{ width: "95%" }}
      >
        {nameList.length > 0 ? "NEXT PAGE" : "GENERATE NAMES"}
      </Button>
    </div>
  );
};
export default NamesList;
