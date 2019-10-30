import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons'

import notasIcon from '../../images/notas.webp';
import { Progress } from 'reactstrap';


import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import LessonModal from '../LessonModal'
import DashboardHeaderUser from './DashboardHeaderUser'


import './style.css';

class DashboardSidebar extends Component {

    static propTypes = {
        auth: PropTypes.object.isRequired
    }

    render() {
        const { user } = this.props.auth;

        return (
            <div className="dashboard-sidebar">
                
                <DashboardHeaderUser/>

                {
                    //USER CLASSES
                }
                <div className="sidebar-sections">
                    <section className="sidebar-section my-classes">

                        <header className="sidebar-section-header my-classes-header">
                            <h4 className="section-heading my-classes-heading">
                                Mis Clases ()
                            </h4>

                            <div className="action-buttons">
                                <div className="icon-button add-button" title="Crea tus propias flashcards">

                                    <LessonModal isNavLink={false} />
                                   
                                </div>
                                <div className="icon-button search-button" title="Buscar otras flascards"><FontAwesomeIcon icon={faSearch} /></div>
                            </div>
                        </header>

                        <ul className="user-packs">
                            { // CLASE EN SIDEBAR
                             }
                            <li className="sidebar-pack">
                                <div className="pack-icon">
                                    <img className="pack-icon-image" src={notasIcon} />
                                </div>

                                <div className="name-and-metadata">
                                    <div className="pack-name" title="Anatomy ">
                                        CLase 1
                                    </div>
                                    <Progress value="25" />
                                    <div className="simple-progress-bar">
                                        <div className="base-bar">
                                            <div className="value-bar"  style={{width: 0.134228 + '%'}}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                        </ul>

                    </section>

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, null)(DashboardSidebar);

