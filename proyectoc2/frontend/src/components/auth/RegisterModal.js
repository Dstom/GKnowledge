import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    NavLink,
    Alert
} from 'reactstrap';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions'

class RegisterModal extends Component {

    state = {
        modal: false,
        name: '',
        lastname: '',
        email: '',
        password: '',
        msg: null
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }

    toggle = () => {
        // Clear errors
        this.props.clearErrors();

        this.setState({
            modal: !this.state.modal
        });
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { name, lastname, email, password } = this.state;

        // Create user boject
        const newUser = {
            name,
            lastname,
            email,
            password
        }

        // Attempt to register
        this.props.register(newUser);

        // close modal
        //this.toggle();
    }

    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;
        if (error !== prevProps.error) {
            // Check for a register error
            if (error.id === 'REGISTER_FAIL') {
                this.setState({ msg: error.msg.msg });
            } else {
                this.setState({ msg: null });
            }
        }

        // if authenticated, close modal

        if (this.state.modal) {
            if (isAuthenticated) {
                this.toggle();
            }
        }
    }

    render() {
        return (
            <div>
                <NavLink onClick={this.toggle} href="#">
                    Register
                </NavLink>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Register</ModalHeader>
                    <ModalBody>
                        {
                            this.state.msg ? (
                                <Alert color="danger">{this.state.msg}</Alert>
                            ) : null
                        }
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Name"
                                    onChange={this.onInputChange}
                                />

                                <Label for="lastname">Lastname</Label>
                                <Input
                                    type="text"
                                    name="lastname"
                                    id="lastname"
                                    placeholder="Lastname"
                                    onChange={this.onInputChange}
                                />

                                <Label for="email">Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    onChange={this.onInputChange}
                                />

                                <Label for="name">Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    onChange={this.onInputChange}
                                />


                            </FormGroup>

                            <Button
                                type="submit"
                                color="dark"
                                className="mt-2"
                                block
                            >Register
                            </Button>
                        </Form>
                    </ModalBody>
                </Modal>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(
    mapStateToProps,
    { register, clearErrors }
)(RegisterModal);




