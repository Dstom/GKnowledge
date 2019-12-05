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
import { addMyDeck } from '../actions/myLessonActions';

import PropTypes from 'prop-types'

class DeckModal extends Component {

    state = {
        modal: false,
        name: '',
        objective: ''
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
        auth: PropTypes.object.isRequired
    }

    onSubmit = (e) => {
        e.preventDefault();
        const lessonId = this.props.mylesson.myLesson._id;
        const newDeck = {            
            name: this.state.name,
            objective: this.state.objective,
            lesson: this.props.mylesson.myLesson._id
        }
        console.log('New Deck: ', newDeck);
        this.props.addMyDeck(lessonId, newDeck);
        this.toggle();
    }

    render() {
        return (
            <Fragment>
                <Link onClick={this.toggle} to="#" className="btn btn-warning" style={{color:"#fff"}}>
                    Crear un Nuevo Deck
                </Link> 
                
                <Modal 
                isOpen={this.state.modal}
                toggle={this.toggle}
                centered={true}
                >
                    <ModalHeader style={{borderBottom: 0}} >Crear un nuevo Deck</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for="name">Nombre del Deck</Label>
                        <Input 
                         type="text"
                         name="name"
                         id="name"
                         placeholder="Deck"
                         onChange={this.onInputChange}
                        />
                    </FormGroup>

                    <Button
                    type="submit"
                    color="dark"
                    className="mt-2"
                    block
                    disabled={!this.state.name}
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
    mylesson: state.mylesson
});

export default connect(mapStateToProps, 
    {addMyDeck})(DeckModal);

