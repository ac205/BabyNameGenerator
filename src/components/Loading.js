import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {CircularProgress, Typography} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    margin: "15vh auto",
    textAlign: "center",
  },
}));

export default function Loading() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress size={100} />
      <Typography variant="h6">Please wait...</Typography>
    </div>
  );
}

