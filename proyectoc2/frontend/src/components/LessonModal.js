import React, { Component } from 'react'
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
import { addLesson } from '../actions/lessonActions';

import PropTypes from 'prop-types'

class LessonModal extends Component {

    state = {
        modal: false,
        name: ''
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

        const newLesson = {            
            name: this.state.name,
            owner: this.props.auth.user._id
        }
        console.log(newLesson);
        this.props.addLesson(newLesson);
        this.toggle();
    }

    render() {
        return (
            <div>
                <NavLink onClick={this.toggle} href="#">
                    Crear Clase
                </NavLink>

                <Modal 
                isOpen={this.state.modal}
                toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Crear una nueva clase</ModalHeader>
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
                
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    lesson: state.lesson,
    auth: state.auth
});

export default connect(mapStateToProps, 
    {addLesson})(LessonModal);

