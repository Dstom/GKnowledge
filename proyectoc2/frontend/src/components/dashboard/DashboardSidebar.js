import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {withRouter} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';


import LessonModal from '../LessonModal';
import DashboardHeaderUser from './DashboardHeaderUser';

import {getMyLessons} from '../../actions/myLessonActions';
import MetadataLesson from './MetadataLesson'



import './style.css';

class DashboardSidebar extends Component {

    static propTypes = {
        auth: PropTypes.object.isRequired,
        mylesson: PropTypes.object.isRequired,
        getMyLessons: PropTypes.func.isRequired

    }
    componentDidMount(){
        if(this.props.auth.user){
            this.props.getMyLessons(this.props.auth.user._id);
        }
    }  

    componentDidUpdate(prevProps) {
        const {user} = this.props.auth;
        if(user && user !== prevProps.auth.user){
          this.props.getMyLessons(user._id);
        }
    }
    
    render() {

        const  userLessons  = this.props.mylesson.myLessons;            

        return (
            <div className="dashboard-sidebar">
                
                <DashboardHeaderUser/>

                <div className="sidebar-sections">
                    <section className="sidebar-section my-classes">

                        <header className="sidebar-section-header my-classes-header">
                            <h4 className="section-heading my-classes-heading">
                                Mis Clases ( {userLessons ? userLessons.length : null} )
                            </h4>

                            <div className="action-buttons">
                                <div className="icon-button add-button" title="Crea tus propias flashcards">

                                    <LessonModal isNavLink={false} />
                                   
                                </div>
                                <div className="icon-button search-button" title="Buscar otras flascards"><FontAwesomeIcon icon={faSearch} /></div>
                            </div>
                        </header>

                        <ul className="user-packs">  
                        {
                            userLessons ? 
                            userLessons.map(lesson => (
                                <MetadataLesson lesson={lesson} key={lesson._id}  />
                            )) : null
                        }                          
                        </ul>

                    </section>

                </div>
            </div>
        )
    }
}
// 
const mapStateToProps = (state) => ({    
    auth: state.auth,
    mylesson: state.mylesson
});

export default withRouter(connect( mapStateToProps, { getMyLessons } )(DashboardSidebar));

