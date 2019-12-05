import React, { Component, buildStyles } from 'react';
import StudyFlashcard from './StudyFlashcard';
import { connect } from 'react-redux'

import { getFlashcardToStudy, updateFLashcardBox } from '../actions/studyActions';
import PropTypes from 'prop-types';
import { Progress } from 'reactstrap';
import './dashboard/style.css';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
class StudyLesson extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            total: null,
            questionAnswered: false,
            countlvl0: 0,
            countlvl1: 0,
            countlvl2: 0
        }
        this.nextFlashcard = this.nextFlashcard.bind(this);
        this.handleShowButton = this.handleShowButton.bind(this);
    }

    static propTypes = {
        auth: PropTypes.object.isRequired,
        study: PropTypes.object.isRequired
    }

    componentDidMount() {
        if (this.props.auth.user) {
            this.props.getFlashcardToStudy(this.props.auth.user._id, this.props.match.params.id);
        }
    }

    componentDidUpdate(prevProps) {
        const { user } = this.props.auth;

        const { study } = this.props;

        if (user && user !== prevProps.auth.user) {
            this.props.getFlashcardToStudy(this.props.auth.user._id, this.props.match.params.id);
        }

        if (study.deckStudy && study.deckStudy !== prevProps.study.deckStudy) {
            this.setState({
                total: this.props.study.deckStudy.flashcards.length
            });
            if (!this.props.study.isLoading) {
                let { count } = this.state;
                this.pushFlashcard(count);
                this.levelCounters();
            }
        }
    }

    pushFlashcard(count) {

        const { flashcards } = this.props.study.deckStudy;
        this.setState({
            question: flashcards[count].flashcard.question,
            answer: flashcards[count].flashcard.answer,
            flashcardId: flashcards[count].flashcard._id,
            count: this.state.count + 1
        });
    }

    nextFlashcard() {
        let { count, total } = this.state;
        if (count === total) {
            alert("Culminaste el estudio");

        } else {
            this.pushFlashcard(count);
            this.setState({
                questionAnswered: false
            });
        }
    }

    handleShowButton() {
        this.setState({
            questionAnswered: true
        })
    }

    levelCounters(){
        const { flashcards } = this.props.study.deckStudy;

        let lvl0 = 0;
        let lvl1 = 0;
        let lvl2 = 0;
        flashcards.map(card => {
            switch(card.cardbox){
                case 0:
                        lvl0++;
                    break;
                case 1:
                        lvl1++;
                    break;
                case 2:
                        lvl2++;
                    break;

            }
        });

        this.setState({
            countlvl0: lvl0,
            countlvl1: lvl1,
            countlvl2: lvl2,
        });

    }

    render() {
        let deck;
        if (this.props.study.deckStudy) {
            deck = this.props.study.deckStudy.deck;
        }
        let { count, total, question, answer, questionAnswered, flashcardId, countlvl0,countlvl1,countlvl2 } = this.state;
        
        return (
            <div className="study-page">
                <div className="study-sidebar">
                    <header className="study-sidebar-header">
                        <div className="first-row">
                            <div className="branding"></div>
                            <div className="study-mix-info">
                                <div className="study-mix-icon">

                                </div>
                                <h3 className="study-mix-name">{deck && deck.name}</h3>
                            </div>
                        </div>
                    </header>

                    <div className="sidebar-sections">
                        <div className="overall-stats-section">

                            <div className="tooltip-wrapper overall-mastery-tooltip-wrapper">
                                <div className="mastery-circle overall-mastery"> 
                                <CircularProgressbar
                                value={66}
                                text={`${66}%`}
                                styles={{                                    
                                    // Customize the path, i.e. the "completed progress"
                                    path: {
                                      // Path color
                                      stroke: `rgba(30, 38, 51)`,
                                      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                      strokeLinecap: 'butt',
                                      // Customize transition animation
                                      transition: 'stroke-dashoffset 0.5s ease 0s',
                                      // Rotate the path
                                      transform: 'rotate(0.25turn)',
                                      transformOrigin: 'center center',
                                    },
                                    text: {
                                        // Text color
                                        fill: '#fff',
                                        // Text size
                                        fontSize: '16px',
                                      },
                                    // Customize the circle behind the path, i.e. the "total progress"
                                    trail: {
                                      // Trail color
                                      stroke: '#3E98C7',
                                      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                      strokeLinecap: 'butt',
                                      // Rotate the trail
                                      transform: 'rotate(0.25turn)',
                                      transformOrigin: 'center center',
                                    },                                    
                                    // Customize background - only used when the `background` prop is true
                                    background: {
                                      fill: '#3e98c7',
                                    },
                                  }}                             
                                />
                                </div>
                            </div>

                            <div className="confidence-ratings-tooltip-wrapper">
                                <div className="confidence-ratings">
                                    <h4 className="confidence-ratings-heading">Confianza</h4>

                                    <ul className="confidence-ratings-bars">
                                        <li className="confidence-ratings-bar level-0">
                                            <div className="level-label">
                                                Diario
                                            </div>
                                            <div className="base-bar">
                                                <div className="count-bar" style={{width: "79.2683%"}}>
                                                </div>
                                            </div>
                                            <div className="level-count">
                                                {countlvl0 }
                                            </div>
                                        </li>

                                        <li className="confidence-ratings-bar level-1">
                                            <div className="level-label">
                                                Mart/Juev
                                            </div>
                                            <div className="base-bar">
                                                <div className="count-bar" style={{width: "79.2683%"}}>
                                                </div>
                                            </div>
                                            <div className="level-count">
                                                {countlvl1}
                                            </div>
                                        </li>

                                        <li className="confidence-ratings-bar level-2">
                                            <div className="level-label">
                                                Viernes
                                            </div>
                                            <div className="base-bar">
                                                <div className="count-bar" style={{width: "79.2683%"}}>
                                                </div>
                                            </div>
                                            <div className="level-count">
                                                {countlvl2}
                                            </div>
                                        </li>

                                    </ul>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>


                <div className="study-card-table">
                    <div className="study-card-table-contents">
                        <header className="study-card-table-header">
                            <div className="deck-and-card-info">

                                <span className="deck-label">
                                    Deck:&nbsp;
                                </span>
                                <span className="deck-name">
                                    {deck && deck.name}
                                </span>
                                <span>
                                    &nbsp;Flashcard {count}/{total}
                                </span>
                            </div>
                        </header>

                        <StudyFlashcard
                            answer={answer}
                            question={question}
                            isAnswered={questionAnswered}
                            flashcardId={flashcardId}
                            showButton={this.handleShowButton}
                            nextFlashcard={this.nextFlashcard}
                        />

                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    auth: state.auth,
    study: state.study
});


export default (connect(mapStateToProps,
    { getFlashcardToStudy, updateFLashcardBox })(StudyLesson))