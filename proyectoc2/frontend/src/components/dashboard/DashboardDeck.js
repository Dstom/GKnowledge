import React, { Component } from 'react'
import { Progress } from 'reactstrap';
import './style.css';


export default class DashboardDeck extends Component {
    render() {
        return (
            <li className="dashboard-deck-row">
                <ul className="deck-row-contents">
                    <li className="deck-mastery">
                        0%
                    </li>
                    <li className="deck-info">
                        <div className="deck-name-and-caption">
                            <h4 className="deck-name">Name</h4>
                            <p className="deck-name-caption" >0 of total Cards studied </p>
                        </div>

                        <div className="simple-progress-bar">
                            <Progress value="25"/>

                        </div>
                    </li>
                </ul>
                
            </li>
        )
    }
}
