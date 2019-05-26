import React from 'react';
import { makeStyles } from '@material-ui/core/styles/index';
import AppBar from '@material-ui/core/AppBar/index';
import Toolbar from '@material-ui/core/Toolbar/index';
import Typography from '@material-ui/core/Typography/index';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

function SimpleAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        Movies
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default SimpleAppBar;