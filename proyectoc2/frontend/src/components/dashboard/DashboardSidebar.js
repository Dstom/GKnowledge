import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';


import LessonModal from '../LessonModal';
import DashboardHeaderUser from './DashboardHeaderUser';

import {getMyLessons} from '../../actions/lessonActions';
import MetadataLesson from './MetadataLesson'



import './style.css';

class DashboardSidebar extends Component {

    static propTypes = {
        auth: PropTypes.object.isRequired,
        lesson: PropTypes.object.isRequired,
        getMyLessons: PropTypes.func.isRequired

    }    
    async componentDidMount(){

        const { user } = await this.props.auth;
        console.log(user);
        if(user)
        {
            console.log(user);    
        }

        
        
      //  this.props.getMyLessons();
        
        
    }
    
    render() {

        const  userLessons  = this.props.lesson.myLessons;
        const { user } = this.props.auth;
        console.log("user in render",user);
        return (
            <div className="dashboard-sidebar">
                
               

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
                                <MetadataLesson name={lesson.name} key={lesson._id} />
                            )) : null
                        }                          
                        </ul>

                    </section>

                </div>
            </div>
        )
    }
}
// <DashboardHeaderUser/>
const mapStateToProps = (state) => ({    
    auth: state.auth,
    lesson: state.lesson
});

export default connect(
    mapStateToProps,
    { getMyLessons }
    )(DashboardSidebar);

