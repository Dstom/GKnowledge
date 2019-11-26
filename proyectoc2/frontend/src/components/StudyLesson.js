import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group';
import { Container, Button, Alert } from 'reactstrap';

import './dashboard/style.css'
class StudyLesson extends Component {

    state = {
        showButton: true,
        showMessage: false,
        showQuestion: true,
        showAnswer: false
    }
    render() {
        return (
            <div className="study-page">
                <div className="study-sidebar">
                    <header className="study-sidebar-header">
                        <div className="first-row">
                            <div className="branding"></div>
                            <div className="study-mix-info">
                                <div className="study-mix-icon">

                                </div>
                                <h3 className="study-mix-name">Deckname</h3>
                            </div>
                        </div>
                    </header>

                    <div className="sidebar-sections">
                        <div className="overall-stats-section">
                            <div className="confidence-ratings-tooltip-wrapper">
                                <div className="confidence-ratings">
                                    <h4 className="confidence-ratings-heading">Confianza</h4>

                                    <ul className="confidence-ratings-bars">
                                        <li className="confidence-ratings-bar level-0">
                                            asd
                                        </li>

                                    </ul>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>


                <div className="study-card-table">
                    <div class="study-card-table-contents">
                        <header className="study-card-table-header">
                            <div className="deck-and-card-info">
                                <span className="deck-name">Deck name</span>
                            </div>
                        </header>

                        <div className="study-cards are-placed">
                            <div className="study-card question-mode is-placed current-card">
                                { this.state.showQuestion &&
                                    <div className="study-card-face question-face"
                                    onClick={() => this.setState({ showAnswer:true })}
                                    >
                                        <header className="card-face-header">
                                            <div>
                                                P
                                  </div>
                                        </header>

                                        <div className="card-content">
                                            <div className="card-body-study">
                                                <div className="inner-html">
                                                    <p>Pregunta</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                                <CSSTransition
                                    in={this.state.showAnswer}
                                    timeout={300}
                                    classNames="question-mode"
                                    unmountOnExit
                                    onEnter={() => this.setState({ showQuestion: false })}
                                    onExited={() => this.setState({ showQuestion: true })}
                                >
                                    <div className="study-card-face answer-face"
                                    onClick={() => this.setState({ show:false })}
                                    >
                                        <header className="card-face-header">
                                            <div>
                                                R
                                        </div>
                                        </header>
                                        <div className="card-content">
                                            <div className="card-body-study">
                                                <div className="inner-html">
                                                    <p>RESPUESTA</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CSSTransition>
                            </div>
                        </div>

                        <div className="study-card-bars">
                            <div className="study-card-bar question-bar is-showing">
                                Mostrar Respuesta
                            </div>

                            <div className="study-card-bar answer-bar">
                                <div class="card-bar-prompt">Tenias conocimiento de la respuesta?</div>
                                <div className="confidence-level-buttons">
                                    {// data-level="0" para negacion de respuesta "1" para afirmacion de respuesta
                                    }
                                    <div className="confidence-level-button confidence-no" data-level="0">
                                        No
                                    </div>
                                    <div className="confidence-level-button confidence-yes" data-level="1">
                                        Si
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default StudyLesson;
