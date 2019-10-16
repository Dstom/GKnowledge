import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import logo from '../images/logo_transparent.png';

export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link className="navbar-brand" to="/">                        
                         GatherKnowledge
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">

                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/categorias">Buscar FlashCards</Link> 
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/flashcard/create">Crear FlashCards</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">

                            <li className="nav-item active">
                                <Link className="nav-link" to="/login">Ingresar</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/create">Registrarse</Link>
                            </li> 
                        </ul>
                    </div>
            </nav>
        )
    }
}
