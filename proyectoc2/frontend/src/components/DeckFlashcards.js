import React, { Component, Fragment } from 'react';
import AppNavbar from './AppNavbar';
import { connect } from 'react-redux'
import { getDeck } from '../actions/myDeckActions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import FlashcardModal from './FlashcardModal'

import { Table, Button } from 'reactstrap'


import PropTypes from 'prop-types'

class DeckFlashcards extends Component {

    static propTypes = {
        auth: PropTypes.object.isRequired,
        deck: PropTypes.object.isRequired
    }


    componentDidMount() {
        this.props.getDeck(this.props.match.params.id);
    }
    componentDidUpdate(prevProps) {
        if (this.props.match.params !== prevProps.match.params) {
            this.props.getDeck(this.props.match.params.id);
        }
    }

    render() {
        const { deck } = this.props.deck;
        var counter = 0;
        return (
            <Fragment>
                <AppNavbar />
                <div className="container">
                    <h2 style={{ marginTop: "30px", marginBottom: "10px", color: "#ff8a47" }}>
                        Flashcards en "{deck ? deck.name : null}"
                    </h2>
                    <div className="row">
                        <FlashcardModal/>
                        <Table borderless>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Pregunta</th>
                                    <th>Respuesta</th>
                                    <th>

                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    deck ?
                                        deck.flashcards.length > 0 ?
                                            deck.flashcards.map(card => (
                                                <tr>
                                                    <th scope="row">{counter++}</th>
                                                    <td>{card.question}</td>
                                                    <td>{card.answer}</td>
                                                    <td>
                                                        <FontAwesomeIcon icon={faPen} />
                                                        <FontAwesomeIcon icon={faTimesCircle} />
                                                    </td>
                                                </tr>
                                            )) : null
                                        : null
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    deck: state.deck
});


export default (connect(mapStateToProps, { getDeck })(DeckFlashcards))