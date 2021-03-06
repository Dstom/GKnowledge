import React, { Component, Fragment } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import RegisterModal from './auth/RegisterModal';
import LoginModal from './auth/LoginModal';
import LessonModal from './LessonModal'

import Logout from './auth/Logout';

class AppNavbar extends Component {
    state = {
        isOpen: false
    }

    static propTypes = {
        auth: PropTypes.object.isRequired
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {

        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <Fragment>
                <NavItem>
                    <span className="navbar-text mr-3">
                        <strong>{user ? `Hola ${user.name}` : ''}</strong>
                    </span>
                </NavItem>
                <NavItem>
                    <Logout />
                </NavItem>
            </Fragment>
        )
        const guestLinks = (
            <Fragment>
                <NavItem>
                    <RegisterModal />
                </NavItem>
                <NavItem>
                    <LoginModal  title="Login"/>
                </NavItem>
            </Fragment>
        )

        const authLessonLinks = (
            <Fragment>
                <NavItem>
                    <LessonModal isNavLink={true}/>
                </NavItem>
            </Fragment>
        )


        return (
            <Container fluid className="p-0">
                <Navbar color="dark" dark expand="sm" className="">
                    <Container>
                        <NavbarBrand href="/">GKnowledge</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>

                            <Nav className="mx-auto" navbar>

                                <NavItem>
                                    <NavLink href="#">
                                        Buscar Flash Cards
                                    </NavLink>
                                </NavItem>
                                {isAuthenticated ? authLessonLinks : <LoginModal title="Crear Clase"/>}                                
                            </Nav>

                            <Nav className="ml-auto" navbar>
                                {isAuthenticated ? authLinks : guestLinks}
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>

            </Container>

        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, null)(AppNavbar);

