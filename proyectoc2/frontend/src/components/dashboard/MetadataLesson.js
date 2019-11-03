import React, { Component, Fragment } from 'react'
import './style.css';

import notasIcon from '../../images/notas.webp';
import { Progress } from 'reactstrap';

import { NavLink} from 'react-router-dom'


export default class metadataLesson extends Component {
    render() {
        return (
            <Fragment>
                <li className="sidebar-pack">
                    <div className="pack-icon">
                        <img className="pack-icon-image" src={notasIcon} />
                    </div>

                    <div className="name-and-metadata">
                        <div className="pack-name" title={this.props.name}>
                            {this.props.name}
                        </div>
                        <Progress value="25" />
                        <div className="simple-progress-bar">
                            <div className="base-bar">
                                <div className="value-bar" style={{ width: 0.134228 + '%' }}>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </Fragment>
        )
    }
}
