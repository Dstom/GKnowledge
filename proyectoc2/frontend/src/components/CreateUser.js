import React, { Component } from 'react';

import axios from 'axios';

export default class CreateUser extends Component {

    onSubmit = async (e) => {        
        e.preventDefault();
        const {password, confirmPassword} = this.state; 
        
        if (password != confirmPassword){
            alert('Las contraseñas no coinciden');
        } else{

            const newUser = {
                email: this.state.email,
                name: this.state.name,
                lastname: this.state.lastname,
                password: this.state.password
            }
            await axios.post("http://localhost:4000/api/users", newUser);
            window.location.href = '/';
        }        
    }

    state = {
        email: '',
        name: '',
        lastname: '',
        password: '',
        confirmPassword: ''
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value            
        })
    }

    async componentDidMount() {

    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6 offset-3">
                    <div className="card card-body">
                        <h4 className="text-center">Registrarse</h4>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-row">
                                <div className="form-group col">
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        value={this.state.name}
                                        onChange={this.onInputChange}
                                        placeholder="Nombres"
                                    />
                                </div>

                                <div className="form-group col">
                                    <input
                                        type="text"
                                        name="lastname"
                                        className="form-control"
                                        value={this.state.lastname}
                                        onChange={this.onInputChange}
                                        placeholder="Apellidos"
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col">
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        value={this.state.email}
                                        onChange={this.onInputChange}
                                        placeholder="Email"
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col">
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        value={this.state.password}
                                        onChange={this.onInputChange}
                                        placeholder="Contraseña"
                                    />
                                </div>

                                <div className="form-group col">
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        className="form-control"
                                        value={this.state.confirmPassword}
                                        onChange={this.onInputChange}
                                        placeholder="Confirmación"
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                            <button type="submit" className="btn btn-primary m-auto">
                                Siguiente
                            </button>
                            </div>
                            

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
