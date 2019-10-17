import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Material Ui
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import BathtubIcon from '@material-ui/icons/Bathtub';

import logo from '../images/logo_transparent.png';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },    
    title: {
        flexGrow: 1,
    },
}));

//export default class Navigation extends Component {
export default function Navigation() {
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start"  color="inherit" aria-label="menu">
                    <BathtubIcon />
                    </IconButton>

                    <Typography variant="h6" className={classes.title}>
                        GKnowledge
                    </Typography>

                    <Button color={'inherit'}
                        component={Link}
                        to={'/login'}>
                        Ingresar
                    </Button>

                    <Button
                        color={'inherit'}
                        component={Link}
                        to={'/create'}>
                        Registro
                    </Button>


                </Toolbar>
            </AppBar>
        </div>
    );
}
