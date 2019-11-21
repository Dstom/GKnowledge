import React, { Component, Fragment } from 'react'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    NavLink
} from 'reactstrap';

import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

import './dashboard/style.css';
import { getDeck } from '../actions/myDeckActions';

import { connect } from 'react-redux'


class CardsPreviewModal extends Component {

    static propTypes = {
        deck: PropTypes.object.isRequired
    }

    componentDidMount() {
        console.log(this.props.deckId);
        this.props.getDeck(this.props.deckId);
    }

    state = {
        modal: false
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        const { deck } = this.props.deck;
        let counter = 1;

        return (
            <Fragment>
                <FontAwesomeIcon icon={faEye} onClick={this.toggle} />

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    centered={true}
                    size="lg"
                >
                    <ModalHeader style={{ borderBottom: 0, margin:"auto" }} >{deck ? deck.name : null} Flashcards</ModalHeader>
                    <ModalBody>
                        {
                            deck ?
                                deck.flashcards.length > 0 ?
                                    deck.flashcards.map(card => (
                                        <section className="preview-card" key={card._id}>
                                            <div className="card-header">
                                                {counter++}
                                            </div>
                                            <div className="card-face front level-5">
                                                <div className="card-question">
                                                    {card.question}
                                            </div>
                                            </div>
                                            <div className="card-face back level-5">
                                                <div className="card-answer">
                                                    {card.answer}
                                                </div>
                                            </div>
                                        </section>
                                    )) : null
                                : null

                        }

                    </ModalBody>
                </Modal>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    deck: state.deck
});


export default (connect(mapStateToProps, { getDeck })(CardsPreviewModal))
