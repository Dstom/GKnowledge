import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
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
import { login } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions'

class LoginModal extends Component {

    state = {
        modal: false,
        email: '',
        password: '',
        msg: null
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
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

        const { email, password } = this.state;

        // Create user boject
        const user = {            
            email,
            password
        }
        
        // Attempt to login
        this.props.login(user);

        // close modal
        //this.toggle();
    }

    componentDidUpdate(prevProps){
        const { error, isAuthenticated } = this.props;
        if(error !== prevProps.error){
            // Check for a register error
            if(error.id === 'LOGIN_FAIL'){
                this.setState({msg: error.msg.msg});  
            }else{
                this.setState({msg: null});
            }
        }

        // if authenticated, close modal

        if(this.state.modal){
            if(isAuthenticated){
                this.toggle();  
            }
        }


    }

    render() {
        return (
            <div>
                <NavLink onClick={this.toggle} href="#">
                    {this.props.title}
                </NavLink>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Login</ModalHeader>
                    <ModalBody>
                        { 
                            this.state.msg ?(
                            <Alert color="danger">{this.state.msg}</Alert> 
                        ) : null 
                        }
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
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
                            >Login
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
    { login, clearErrors }
    )(LoginModal);




