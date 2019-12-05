import React, { Component, Fragment } from 'react'

import { Jumbotron, Container, Row, Col } from 'reactstrap'

import AppNavbar from "./AppNavbar";
import Footer from './Footer'

import appcss from '../App.css'; 
import homeImage from '../images/home-image.png';


export default class Home extends Component {
    render() {        

        return (
            <Fragment>
            <AppNavbar />
                <Jumbotron fluid style={{ backgroundImage: `url(${homeImage})`, backgroundSize: 'cover' , minHeight: '500px', display:'flex' }}>
                    <Container fluid className="my-auto">
                        <h1 className="display-3">Gathering Knowledge</h1>
                        <p className="lead">Aprende rápido</p>
                    </Container>
                </Jumbotron>
                
                
            </Fragment>
        )
    }
}

/*
<Row>
                    <Col md="6" className="slide-content">
                        <h2>Aprende Rápdio</h2>
                    </Col>
                    <Col md="6" className="slide-image">
                    asd
                    </Col>
                </Row>
                            <Footer />

*/
