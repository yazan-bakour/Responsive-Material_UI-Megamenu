import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Header from './components/Header'

const useStyles = makeStyles(() =>
  createStyles({
    app: {
      backgroundColor: '#2a3d66',
      height: '100vh'
    }
  })
)

function App() {
  const classes = useStyles()
  return (
    <div className={classes.app}>
      <Header />
    </div>
  );
}

export default App;
