import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChildFriendlyIcon from "@material-ui/icons/ChildFriendly";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Navbar = ({ toggleDrawer, handleAddName }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Tooltip title="Menu" aria-label="Menu">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer("left", true)}
            >
              <MenuIcon />
            </IconButton>
          </Tooltip>
          <Typography variant="h6" color="inherit" className={classes.title} component={NavLink} to="/" style={{textDecoration: "none"}}>
            <ChildFriendlyIcon />
            Baby Name Generator
          </Typography>
          <Tooltip title="Manual Add Name" aria-label="Add Name">
            <IconButton color="inherit" onClick={handleAddName}>
              <AddCircleOutlineIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
