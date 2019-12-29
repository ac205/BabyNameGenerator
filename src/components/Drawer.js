import React from "react";
import { NavLink } from "react-router-dom";
import {
  makeStyles,
  Typography,
  SwipeableDrawer,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar
} from "@material-ui/core";
import CasinoIcon from "@material-ui/icons/Casino";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down("xs")]: {}
  },
  title: {
    margin: 5,
    textAlign: "center"
  }
}));

export default function Drawer({ toggleDrawer, drawerSide }) {
  const classes = useStyles();
  const sideList = side => (
    <div
      style={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <span className={classes.title}>
        <Typography variant="h6" gutterBottom>
          Baby Name Generator
        </Typography>
        <Typography variant="overline" display="block" gutterBottom>
          v1.0
        </Typography>
      </span>
      <Divider />
      <List>
        <ListItem
          button
          component={NavLink}
          to="/favorites"
          style={{ textDecoration: "none" }}
        >
          <ListItemAvatar>
            <ThumbUpIcon />
          </ListItemAvatar>
          <ListItemText primary={"Favorites"} />
        </ListItem>
        <ListItem
          button
          component={NavLink}
          to="/"
          style={{ textDecoration: "none" }}
        >
          <ListItemAvatar>
            <CasinoIcon />
          </ListItemAvatar>
          <ListItemText primary={"Name Generator"} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <SwipeableDrawer
        open={drawerSide.left}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
        {sideList("left")}
      </SwipeableDrawer>
    </div>
  );
}
