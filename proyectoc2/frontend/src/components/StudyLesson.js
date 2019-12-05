import React, { Component } from 'react';
import StudyFlashcard from './StudyFlashcard';
import { connect } from 'react-redux'

import {getFlashcardToStudy, updateFLashcardBox} from '../actions/studyActions'
import PropTypes from 'prop-types'

import './dashboard/style.css'
class StudyLesson extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            total: null,
            questionAnswered: false
        }
    }

    static propTypes = {
        auth: PropTypes.object.isRequired,
        study: PropTypes.object.isRequired
    }  

    componentDidMount(){
        if(this.props.auth.user){
            this.props.getFlashcardToStudy(this.props.auth.user._id,this.props.match.params.id);            
        }        
    }  

    componentDidUpdate(prevProps) {
        const {user} = this.props.auth;

        const {study} = this.props;

        if(user && user !== prevProps.auth.user){
            this.props.getFlashcardToStudy(this.props.auth.user._id,this.props.match.params.id); 
        }  

       if(study.deckStudy && study.deckStudy !== prevProps.study.deckStudy) {
            this.setState({ 
                total: this.props.study.deckStudy.flashcards.length
            });
            if(!this.props.study.isLoading){
                let {count} = this.state;
                this.pushFlashcard(count);    
            }
        }        
    }

    pushFlashcard(count){
        console.log("deckStudy",this.props.study.deckStudy);
        console.log("count", count);
        const {flashcards} = this.props.study.deckStudy;
        console.log(flashcards);
        this.setState({
            question: flashcards[count].flashcard.question,
            answer: flashcards[count].flashcard.answer,
            flashcardId: flashcards[count].flashcard._id,
            count: this.state.count + 1
        });
    }
    
    nextFlashcard(){
        let { count, total } = this.state;
        if(count === total){
            alert("Culminaste el estudio");

        }else{
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

    render() {       
        let deck ;
        if(this.props.study.deckStudy){
            deck = this.props.study.deckStudy.deck;
        }  
        
        
        let { count, total, question, answer, questionAnswered, flashcardId} = this.state; 

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