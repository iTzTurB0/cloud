// App.js
import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GoogleMap from './GoogleMap';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  title: {
    marginBottom: theme.spacing(2),
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        Welcome to My Map App!
      </Typography>
      <GoogleMap />
    </Container>
  );
};

export default App;