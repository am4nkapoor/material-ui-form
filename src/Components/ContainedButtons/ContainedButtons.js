import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

const style = {
  display: 'flex',
  justifyContent: 'flex-end',
  borderTop: '1px solid #ccc',
  width: '98%',
  paddingTop: '10px'
}  

export default function ContainedButtons() {
    const classes = useStyles();

    return(
      <div className={classes.root} style={style}>
        <Button style={{textTransform: 'none'}} variant="contained">Cancel</Button>
        <Button style={{textTransform: 'none'}} variant="contained" color="primary">Proceed</Button>
      </div>
    )
}
