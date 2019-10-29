import React, { Component } from 'react'

import './style.css'

import DashboardDetail from './DashboardDetail';
import DashboardSidebar from './DashboardSidebar';

export default class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard-page">
                <DashboardSidebar/>
                <DashboardDetail/>
            </div>
        )
    }
}
