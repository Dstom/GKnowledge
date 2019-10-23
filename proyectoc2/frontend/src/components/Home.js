import React, { Component } from 'react'

import { Jumbotron, Container, Row, Col } from 'reactstrap'

import appcss from '../App.css'; 


export default class Home extends Component {
    render() {        

        return (
            <div>
                <Jumbotron fluid>
                    <Container fluid>
                        <h1 className="display-3">Gathering Knowledge</h1>
                        <p className="lead">Aprende rápido</p>
                    </Container>
                </Jumbotron>

                <Row>
                    <Col md="6" className="slide-content">
                        <h2>Aprende Rápdio</h2>
                    </Col>
                    <Col md="6" className="slide-image">
                    asd
                    </Col>
                </Row>

            </div>
        )
    }
}
