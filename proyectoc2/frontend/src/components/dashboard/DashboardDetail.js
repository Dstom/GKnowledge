import React, { Component, Fragment } from 'react';
import { withRouter, Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

import { Button } from 'reactstrap'

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './style.css';
import notasIcon from '../../images/notas.webp';

import { getMyLesson } from '../../actions/myLessonActions'

import DashboardDeck from './DashboardDeck';
import DeckModal from '../DeckModal';


class DashboardDetail extends Component {

    static propTypes = {
        auth: PropTypes.object.isRequired,
        mylesson: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.getMyLesson(this.props.match.params.id);
    }
    componentDidUpdate(prevProps) {
        if (this.props.match.params !== prevProps.match.params) {
            this.props.getMyLesson(this.props.match.params.id);
        }
    }


    render() {

        const { myLesson } = this.props.mylesson;
        console.log("My Lesson", myLesson)
        const fullName = myLesson ? myLesson.owner.name + " " + myLesson.owner.lastname : null;
        return (
            <div className="dashboard-pack-detail">
                <header className="dashboard-pack-detail-header">
                    <div className="first-row">
                        <div className="pack-icon">
                            <img className="pack-icon-image" src={notasIcon} alt="notes_icon" />
                        </div>

                        <div className="pack-header-main">
                            <h1 className="pack-name" title={myLesson ? myLesson.name : null}>{myLesson ? myLesson.name : null} </h1>
                            <div className="pack-metadata">
                                <div className="pack-creator">
                                    Creador: <a className="creator-profile-link" href={"LinkProp"}>{myLesson ? fullName : null}</a>
                                </div>

                                <div className="user-pack-stats">
                                    <span className="stat-value">x &nbsp;</span>
                                    de
                                    <span className="stat-value">&nbsp;total&nbsp;</span>
                                    tarjetas estudiadas
                                </div>
                            </div>

                            <div className="pack-actions">

                                <div className="edit-button-and-modal">
                                    <div className="icon-button edit-button">

                                        <FontAwesomeIcon icon={faPencilAlt} />

                                    </div>

                                </div>

                                <div className="pack-actions-buttons">
                                    <div className="pack-options-button">
                                        <div className="options-menu-button bottom-right">
                                            <div className="icon-button options-button-horizontal">
                                                <FontAwesomeIcon icon={faEllipsisH} />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="second-row">
                        <ul className="tab-switcher is-light">
                            <li className="tab-item tab-item-decks is-selected">
                                Barajas (0)
                            </li>
                            <li className="tab-item tab-item-decks">
                                Aprendices (0)
                            </li>

                        </ul>
                    </div>

                </header>

                <div className="detail-sections">
                    <section className="pack-decks-section" id="primary-nav">
                        {myLesson ?
                            myLesson.decks.length > 0 ?
                                <Fragment>
                                    <div className="dashboard-pack-deck-list-header">
                                        <div className="pack-actions">
                                            <DeckModal />
                                        </div>
                                    </div>
                                    <ul className="deck-list">
                                        {
                                            myLesson.decks.map(deck => (
                                                <DashboardDeck deck={deck} key={deck._id} />
                                            ))
                                        }

                                    </ul>
                                </Fragment> :
                                <div className="pack-no-deck-info">
                                    <h2 className="deck-name">Esta clase no tiene barajas para practicar</h2>
                                    
                                    <DeckModal />
                                </div>
                            : null
                        }
                    </section>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    auth: state.auth,
    mylesson: state.mylesson
});


export default withRouter(connect(mapStateToProps, { getMyLesson })(DashboardDetail))