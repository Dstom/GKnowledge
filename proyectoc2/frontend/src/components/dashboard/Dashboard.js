import React, { Component } from 'react'

import './style.css'

import DashboardDetail from './DashboardDetail';
import DashboardSidebar from './DashboardSidebar';


import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Dashboard extends Component {

    state = {
        isMain: false
    }

    static propTypes = {
        isMain: PropTypes.bool
    }       
    render() {
        console.log(this.props.isMain);

        return (
            <div className="dashboard-page">
                <DashboardSidebar />
                { 
                    this.props.isMain ?
                    <div className="dashboard-pack-detail">
                        MAIN DASHBOARD
                    </div>:
                    <DashboardDetail/>
                }
            </div>
        )
    }
}

export default Dashboard;

