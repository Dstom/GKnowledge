import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class DashboardHeaderUser extends Component {

    static propTypes = {
        auth: PropTypes.object.isRequired
    }

    render() {
        const { user } = this.props.auth;
        return (
            <header className="dashboard-sidebar-header">
                    <div className="first-row">
                        <div className="branding"></div>
                        <div className="user">
                            <div className="user-avatar">
                                <img className="user-avatar-image" src="https://s3.amazonaws.com/brainscape-prod/system/um/004/484/913/avatar_square.?1569038897" />
                            </div>

                            <h3 className="user-name">{user ? `${user.name} ${user.lastname}` : ''}</h3>
                            <div className="user-stats">(53 Cards studied • 1 Decks created)</div>
                        </div>

                        <div className="dashboard-options-button">
                        </div>
                    </div>
            </header>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(DashboardHeaderUser);


