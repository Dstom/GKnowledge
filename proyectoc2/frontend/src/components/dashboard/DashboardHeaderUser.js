import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import { logout } from '../../actions/authActions';

class DashboardHeaderUser extends Component {

    state = {
        dropdownOpen: false
    }

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    }

    render() {
        const { user } = this.props.auth;   

        return (
            <header className="dashboard-sidebar-header">
                <div className="first-row">
                    <div className="branding"></div>
                    <div className="user">
                        <div className="user-avatar">
                            <img className="user-avatar-image" src="https://s3.amazonaws.com/brainscape-prod/system/um/004/484/913/avatar_square.?1569038897" alt="notes_icon" />
                        </div>

                        <h3 className="user-name">{user ? `${user.name} ${user.lastname}` : ''}</h3>
                        <div className="user-stats">(53 Cards studied • 1 Decks created)</div>
                    </div>

                    <div className="dashboard-options-button">
                        <div className="options-menu-button">
                            <div className="icon-button options-button">
                                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                    <DropdownToggle tag='span'>
                                    <FontAwesomeIcon icon={faCog} />
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem >Perfil</DropdownItem>
                                        <DropdownItem>Mi Cuentaa</DropdownItem>
                                        <DropdownItem onClick={this.props.logout} href="/">      
                                        Cerrar Sesion                                                                                   
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {logout})(DashboardHeaderUser);