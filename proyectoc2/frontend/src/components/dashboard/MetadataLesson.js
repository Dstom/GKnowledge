import React, { Component, Fragment } from 'react'
import './style.css';

import notasIcon from '../../images/notas.webp';
import { Progress } from 'reactstrap';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom'

export default class metadataLesson extends Component {

    static propTypes = {
        lesson: PropTypes.object.isRequired
    }
    render() {
        const { lesson } = this.props;
        return (
            <Fragment>                
                <li className="sidebar-pack">
                    <div className="pack-icon">
                        <img className="pack-icon-image" src={notasIcon} />
                    </div> 

                    <div className="name-and-metadata">                       
                        <Link to={"/dashboard/"+ lesson._id+"/decks"} className="pack-name" title={lesson.name}>
                            {lesson.name}
                        </Link>
                        <Progress value="25" />                       
                    </div>
                </li>
            </Fragment>
        )
    }
}
