import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

import { Button } from 'reactstrap'


import './style.css';
import notasIcon from '../../images/notas.webp';


export default class DashboardDetail extends Component {
    render() {
        return (
            <div className="dashboard-pack-detail">
                <header className="dashboard-pack-detail-header">
                    <div className="first-row">
                        <div className="pack-icon">
                            <img className="pack-icon-image" src={notasIcon} />
                        </div>

                        <div className="pack-header-main">
                            <h1 className="pack-name" title={"Clase"}>Clase</h1>
                            <div className="pack-metadata">
                                <div className="pack-creator">
                                    Creador: <a className="creator-profile-link" href={"LinkProp"}>Nombres Apellidos</a>
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
                        <div className="pack-no-deck-info">
                            <h2 className="deck-name">Esta clase no tiene barajas para practicar</h2>
                            <Button color="warning">Crear Baraja</Button>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}
