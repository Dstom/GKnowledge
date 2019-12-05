import React, { Component, Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';
import './dashboard/style.css'

export default class StudyFlashcard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showCardBar: true,
            showButtons: false,
            showQuestion: true,
            showAnswer: false
        }
        this.checkAnswerConfidence = this.checkAnswerConfidence.bind(this);
    }   

    checkAnswerConfidence(e) {
        let { isAnswered } = this.props;
        if(!isAnswered){
            let elem = e.currentTarget;
            let answerConfidence = Number(elem.dataset.id);
            console.log(answerConfidence);

            this.props.showButton();
        }
    }

    handleNextQuestion(){
        this.setState({ 
            questionAnswered: true
        });
    }

    render() {
        let { answer, question } = this.props;

        return (
            <Fragment>
                <div className="study-cards are-placed">
                    <div className="study-card question-mode current-card">
                        {this.state.showQuestion &&
                            <div className="study-card-face question-face"
                                onClick={() =>
                                    this.setState({ showAnswer: true, showButtons: true })
                                }
                            >
                                <header className="card-face-header">
                                    <div>
                                        P
                                    </div>
                                </header>

                                <div className="card-content">
                                    <div className="card-body-study">
                                        <div className="inner-html">
                                            <p>{question}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        <CSSTransition
                            in={this.state.showAnswer}
                            timeout={300}
                            classNames="answer"
                            unmountOnExit
                            onEnter={() => this.setState({ showQuestion: false })}
                            onExited={() => this.setState({ showQuestion: true })}
                        >
                            <div className="study-card-face answer-face"
                                onClick={() => this.setState({ showAnswer: false, showButtons: false })}
                            >
                                <header className="card-face-header">
                                    <div>
                                        R
                                    </div>
                                </header>
                                <div className="card-content">
                                    <div className="card-body-study">
                                        <div className="inner-html">
                                            <p>{answer}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CSSTransition>
                    </div>
                </div>

                <div className="study-card-bars">

                    {this.state.showCardBar &&
                        <div className="study-card-bar question-bar"
                            onClick={() =>
                                this.setState({ showAnswer: true, showButtons: true })
                            }
                        >
                            Mostrar Respuesta
                        </div>
                    }

                    <CSSTransition
                        in={this.state.showButtons}
                        timeout={300}
                        classNames="answerbar"
                        unmountOnExit
                        onEnter={() => this.setState({ showCardBar: false })}
                        onExited={() => this.setState({ showCardBar: true })}
                    >
                        <div className="study-card-bar answer-bar">
                            <div className="card-bar-prompt">Tenias conocimiento de la respuesta?</div>
                            <div className="confidence-level-buttons">
                                {// data-level="0" para negacion de respuesta "1" para afirmacion de respuesta
                                }
                                <div className="confidence-level-button confidence-no" data-id="0"
                                    onClick={this.checkAnswerConfidence}
                                >
                                    No
                                    </div>
                                <div className="confidence-level-button confidence-yes" data-id="1"
                                    onClick={this.checkAnswerConfidence}    
                                >
                                    Si
                                    </div>

                            </div>
                        </div>
                    </CSSTransition>
                </div>
            </Fragment>
        )
    }
}
