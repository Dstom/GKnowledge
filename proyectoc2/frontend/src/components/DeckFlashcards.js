import React, { Component, Fragment } from 'react';
import AppNavbar from './AppNavbar';
import { connect } from 'react-redux'
import { getDeck } from '../actions/myDeckActions'


import PropTypes from 'prop-types'

class DeckFlashcards extends Component {

    static propTypes = {
        auth: PropTypes.object.isRequired,
        deck: PropTypes.object.isRequired
    }

    
    componentDidMount() {
        this.props.getDeck(this.props.match.params.id);
    }
    componentDidUpdate(prevProps) {
        if (this.props.match.params !== prevProps.match.params) {
            this.props.getDeck(this.props.match.params.id);
        }
    }

    render() {
        const { deck } = this.props.deck;
        console.log(this.props.deck);
        return (
            <Fragment>
                <AppNavbar />
                <div className="container">
                    <div className="row">
                        <h2 style={{ marginTop: "30px", marginBottom: "10px", color: "#ff8a47" }}>
                            Flashcards en "{ deck ? deck.name : null }"
                        </h2>                     
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    deck: state.deck
});


export default (connect(mapStateToProps, { getDeck })(DeckFlashcards))