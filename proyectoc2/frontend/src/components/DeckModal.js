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
import { addDeck } from '../actions/myLessonActions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import PropTypes from 'prop-types'

class LessonModal extends Component {

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

        const newDeck = {            
            name: this.state.name,
            objective: this.state.objective,
            lesson: this.props.auth.user._id
        }
        console.log(newDeck);
        this.props.addDeck(newLesson);
        this.toggle();
    }

    render() {
        return (
            <Fragment>
                {
                    <Link onClick={this.toggle} href="#">
                      Crear un Nuevo Deck
                    </Link> 
                }
                <Modal 
                isOpen={this.state.modal}
                toggle={this.toggle}
                centered={true}
                >
                    <ModalHeader style={{borderBottom: 0}} >Crear una nueva clase</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for="name">Nombre de la clase</Label>
                        <Input 
                         type="text"
                         name="name"
                         id="name"
                         placeholder="Crear Clase"
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
    lesson: state.lesson,
    auth: state.auth
});

export default connect(mapStateToProps, 
    {addDeck})(LessonModal);

