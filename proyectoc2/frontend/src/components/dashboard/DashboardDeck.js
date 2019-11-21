import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';

import { Progress } from 'reactstrap';
import './style.css';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faPen, faEllipsisV, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import CardsPreviewModal from '../CardsPreviewModal'

export default class DashboardDeck extends Component {

    static propTypes = {
        deck: PropTypes.object.isRequired
    }
    render() {
        const deck = this.props.deck;
        return (
            <li className="dashboard-deck-row">
                <ul className="deck-row-contents">
                    <li className="deck-mastery">
                        0%
                    </li>
                     
                    <li className="deck-info">
                        <div className="deck-name-and-caption">
                            <h4 className="deck-name">{this.props.deck.name}</h4>
                            <p className="deck-name-caption">0 of total Cards studied</p>
                        </div>

                        <div className="simple-progress-bar">
                            <Progress value="25" />
                        </div>
                    </li>

                    <li className="deck-actions">
                        <div className="dashboard-deck-actions-button-set">
                            <div className="action-buttons">
                                {deck.flashcards.length > 0 ?
                                    <Fragment>
                                        <div className="icon-button browse-button">
                                        <CardsPreviewModal deckId={deck._id}/>
                                        </div>
                                        <div className="icon-button edit-button">
                                            <FontAwesomeIcon icon={faPen} />
                                        </div>
                                        
                                    </Fragment>
                                    :
                                    <Link to={"/decks/" + deck._id + "/cards"} className="btn btn-success" style={{color:"#fff", marginLeft:"20px" }}>
                                        Añadir Card
                                    </Link>
                                }
                                <div className="icon-button option-button">
                                    <FontAwesomeIcon icon={faEllipsisV} />
                                </div>
                                <div className="icon-button study-button">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>
        )
    }
}
