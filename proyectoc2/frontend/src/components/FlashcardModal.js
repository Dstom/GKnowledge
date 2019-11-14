import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
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

import { connect } from 'react-redux';
import { addMyFlashcard } from '../actions/myDeckActions';

import PropTypes from 'prop-types'

class DeckModal extends Component {

    state = {
        modal: false,
        question: '',
        answer: '',

    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });    
    }

    onInputChange =(e) => {
        this.setState({
            [e.target.name] : e.target.value
        });        
    }

    static propTypes = {
        auth: PropTypes.object.isRequired,
        deck: PropTypes.object.isRequired
    }

    onSubmit = (e) => {
        e.preventDefault();
        const deckId = this.props.deck.deck._id;
        const newCard = {            
            question: this.state.question,
            answer: this.state.answer,
            deck: deckId
        }
        console.log('New Card: ', newCard);
        this.props.addMyFlashcard(deckId, newCard);
        this.toggle();
    }

    render() {
        return (
            <Fragment>
                <Link onClick={this.toggle} to="#" className="btn btn-warning">
                    Crear Flashcard
                </Link> 
                
                <Modal 
                isOpen={this.state.modal}
                toggle={this.toggle}
                centered={true}
                >
                    <ModalHeader style={{borderBottom: 0}} >Crear un nuevo Flashcard</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for="name">Pregunta de la carta</Label>
                        <Input 
                         type="text"
                         name="question"
                         id="question"
                         placeholder="Pregunta"
                         onChange={this.onInputChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="name">Pregunta de la carta</Label>
                        <Input 
                         type="text"
                         name="answer"
                         id="answer"
                         placeholder="Respusta"
                         onChange={this.onInputChange}
                        />
                    </FormGroup>

                    <Button
                    type="submit"
                    color="dark"
                    className="mt-2"
                    block
                    disabled={!this.state.question}
                    >
                        Continuar
                    </Button>
                    </Form> 
                    </ModalBody>
                </Modal>                
            </Fragment>
        )
    }
}


const mapStateToProps = (state) => ({
    auth: state.auth,
    deck: state.deck
});

export default connect(mapStateToProps, {addMyFlashcard} )(DeckModal);

