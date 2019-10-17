import React, { Component } from 'react';

import axios from 'axios';
import PropTypes from 'prop-types';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

//const useStyles = withStyles(theme => ({
const useStyles = theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
      },
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  });

//export default withStyles(useStyles)(class CreateUser extends Component {
//export default class CreateUSer extends Component{
class CreateUser extends Component {

    onSubmitUser = async (e) => {
        e.preventDefault();
        const { password } = this.state;

        /*if (password.length < 8) {
            alert('Tu contraseña es muy corta');
        } else {*/

            const newUser = {
                email: this.state.email,
                name: this.state.name,
                lastname: this.state.lastname,
                password: this.state.password
            }
            console.log(newUser);
            await axios.post("http://localhost:4000/api/users", newUser);
            window.location.href = '/';
       // }
    }

    state = {
        email: '',
        name: '',
        lastname: '',
        password: ''
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    async componentDidMount() {

    }


    render(){
        const { classes }  = this.props;

        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Registro
                    </Typography>
                    <form className={classes.form} onSubmit={this.onSubmitUser}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    name="name"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Nombres"
                                    autoFocus
                                    onChange={this.onInputChange}
                                    value={this.state.name}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Apellidos"
                                    name="lastname"
                                    autoComplete="lname"
                                    onChange={this.onInputChange}
                                    value={this.state.lastname}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Corre Electrónico"
                                    name="email"
                                    autoComplete="email"
                                    onChange={this.onInputChange}
                                    value={this.state.email}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Contraseña"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={this.onInputChange}
                                    value={this.state.password}
                                />
                            </Grid>                            
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Registrarse
                            </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    Cuentas con una cuenta? Ingresa
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        );
    }    
}

CreateUser.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(CreateUser);


